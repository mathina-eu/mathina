<template>
  <div>
    <div
      :class="{'app-container--fatality app-container--fatality--pc': isDead}"
      :style="{height: `${wrapperHeight}px`, width: `${wrapperWidth}px`}"
      class="app-container mx-auto my-10"
    >
      <div
        :class="{'player--dead': isDead}"
        :style="playerStyle"
        class="player"
      >
        <img
          src="~/assets/neko.png"
          class="player__image"
        >
      </div>
      <div
        :class="{'target--gg': hasPlayerWon}"
        :style="targetStyle"
        class="target"
      >
        <img
          src="~/assets/heart.png"
          class="target__image"
        >
      </div>
      <div
        :class="{'fatality--active': isDead}"
        class="fatality"
      >
        <h1 class="fatality__title">
          That's a fail!
        </h1>
        <button
          @click="restart"
          class="fatality__button"
        >
          Retry?
        </button>
      </div>
      <div
        v-for="line in grid"
        :key="line.id"
        :style="line.style"
        :class="line.class"
        class="bar"
      />
      <div
        v-for="[id, loc] in Object.entries(locations)"
        :key="id"
        :style="loc.style"
        @click="visitLocation(id, loc.x, loc.y)"
        :class="loc.classes"
        class="loc"
      />
    </div>
    <audio
      ref="fatality"
      src="~/assets/audio/sad.mp3"
      preload="auto"
    />
    <audio
      ref="win"
      src="~/assets/audio/nyan.mp3"
      preload="auto"
    />
  </div>
</template>

<script>
export default {
  layout: 'iframe',
  data() {
    return {
      start: '0,2',
      finish: '7,1',
      wrapperHeight: 400,
      locRadius: 20,
      visitedLocations: [],
      map: [],
      // sy = square yellow, tg = triangle green, cr = circle red, ...
      setup: [
        'sy,tg,cr,sr,tr,cg,sb,cr',
        'ty,sr,sb,cb,sg,sb,tr,tb',
        'cr,cb,tr,sy,cr,sy,tg,tb',
        'tr,tb,cr,tr,cb,cg,cy,cr',
      ],
      currentLocation: null,
      isDead: false,
    };
  },
  computed: {
    numHorizontal() {
      return this.map.length;
    },
    locationsPerLine() {
      if (this.map.length < 1) {
        return 0;
      }
      return this.map[0].length;
    },
    locations() {
      if (this.numHorizontal < 1) {
        return {};
      }
      const locs = {};

      for (let y = 0; y < this.numHorizontal; y++) {
        let offsetTop = (y+1) * this.v - this.locRadius;

        let itemSize = this.locRadius * 2 + 1;
        for (let x = 0; x < this.locationsPerLine; x++) {
          let offsetLeft = x * this.a + (y+1) * this.a / 2 - this.locRadius - 1;
          let id = `${x},${y}`;
          let isVisited = this.visitedLocations.includes(id);
          locs[id] = {
            y: y,
            x: x,
            visited: isVisited,
            style: {
              top: `${offsetTop}px`,
              left: `${offsetLeft}px`,
              width: `${itemSize}px`,
              height: `${itemSize}px`,
            },
            classes: `loc--${this.map[y][x]['shape']} loc--${this.map[y][x]['color']} ${isVisited ? 'loc--visited' : ''}`,
            shape: this.map[y][x]['shape'],
            color: this.map[y][x]['color'],
          };

          if (locs[id]['shape'] === 'triangle') {
            locs[id]['style']['background'] = 'none';
            locs[id]['style']['borderBottom'] = `${itemSize}px solid ${locs[id]['color']}`;
            locs[id]['style']['borderLeft'] = `${itemSize/2}px solid transparent`;
            locs[id]['style']['borderRight'] = `${itemSize/2}px solid transparent`;
          }
        }
      }
      return locs;
    },
    a() {
      return 2 * this.v / Math.sqrt(3);
    },
    v() {
      return this.wrapperHeight / (this.numHorizontal + 1);
    },
    targetStyle() {
      if (this.locations.length < 1) {
        return {};
      }
      return {
        left: this.locations[this.finish].style.left,
        top: this.locations[this.finish].style.top,
      };
    },
    playerStyle() {
      if (!this.currentLocation) {
        return {
          opacity: 0,
        };
      }
      let rotate = Math.ceil(Math.random() * 10) * 360;
      return {
        left: this.currentLocation.style.left,
        top: this.currentLocation.style.top,
        transform: `rotateY(${rotate}deg)`,
      };
    },
    wrapperWidth() {
      return Math.floor((this.locationsPerLine+1) * this.a);
    },
    hasPlayerWon() {
      return this.currentLocation === this.locations[this.finish];
    },
    grid() {
      if (this.numHorizontal < 1) {
        return [];
      }
      const lines = [];

      const offsetSize = this.wrapperHeight / (this.numHorizontal + 1);

      for (let i = 0; i < this.numHorizontal; i++) {
        lines.push({
          id: `h${i}`,
          style: {
            top: `${(i+1) * offsetSize}px`
          },
          class: `bar--horizontal`,
        });
      }

      const horizOffsetSize = this.wrapperWidth / (this.locationsPerLine + 1);

      for (let i = 0; i < this.locationsPerLine; i++) {
        lines.push({
          id: `dccw${i}`,
          style: {
            top: `${this.v}px`,
            left: `${(i+1) * horizOffsetSize - 25}px`,
            height: `${this.wrapperHeight - 2 * this.v}px`,
          },
          class: 'bar--diagonal bar--diagonal--ccw'
        });
        lines.push({
          id: `dcw${i}`,
          style: {
            top: `${this.v}px`,
            left: `${(i+1) * horizOffsetSize + 20}px`,
            height: `${this.wrapperHeight - 2 * this.v}px`,
          },
          class: 'bar--diagonal bar--diagonal--cw'
        });
      }
      return lines;
    },
  },
  mounted() {
    this.restart();
  },
  created() {
    let locs = [];

    const shapeMap = {
      's': 'square',
      't': 'triangle',
      'c': 'circle',
    };

    const colorMap = {
      'g': 'green',
      'y': 'yellow',
      'r': 'red',
      'b': 'blue',
    };

    for (let line of this.setup) {
      let row = [];
      for (let rule of line.split(',')) {
        let loc = {
          'shape': shapeMap[rule.charAt(0)],
          'color': colorMap[rule.charAt(1)]
        };
        row.push(loc);
      }
      locs.push(row);
    }

    this.map = locs;
  },
  methods: {
    restart() {
      this.isDead = false;
      this.currentLocation = this.locations[this.start];
      this.visitedLocations = [];
    },
    visitLocation(id, x, y) {
      if (this.hasPlayerWon) {
        return false;
      }
      if (this.isDead) {
        return false;
      }

      if (!this.currentLocation) {
        if (x !== 0 || y !== 2) {
          return false;
        }
      } else {
        let dy = y - this.currentLocation.y;
        let dx = x - this.currentLocation.x;

        if (Math.abs(dy) > 1) {
          return false;
        }
        if (Math.abs(dx) > 1) {
          return false;
        }
        if (dy === -1 && dx <= -1) {
          return false;
        }
      }

      if (this.currentLocation &&
        this.currentLocation['shape'] !== this.locations[id]['shape'] &&
        this.currentLocation['color'] !== this.locations[id]['color']
      ) {
        this.isDead = true;
        this.$refs.fatality.play();
      }

      this.addVisitedLocation(id);
    },
    addVisitedLocation(id) {
      this.visitedLocations.push(id);
      this.currentLocation = this.locations[id];
      if (this.hasPlayerWon) {
        this.$refs.win.play();
      }
    }
  },
};
</script>

<style scoped>
  .app-container {
    position: relative;

    &--fatality {
      background: black;

      &--pc {
        background: palegoldenrod;
      }

      .bar {
        background: rgba(139, 0, 0, 0.58) !important;
      }

      .loc {
        background-color: rgba(255, 69, 0, 0.51);
        border-bottom-color: rgba(255, 69, 0, 0.51) !important;
      }
    }
  }

  .fatality {
    position: absolute;
    z-index: -1;
    left: 25%;
    top: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0, 0);
    transform-origin: center;
    opacity: 0;

    &--active {
      opacity: 100;
      transform: scale(1, 1);
      z-index: 200;
      transition: all 120ms ease-in;
    }

    &__title {
      pointer-events: none;
      user-select: none;
      color: black;
      text-shadow: 5px 5px 5px orangered;
      font-size: 6rem;
    }

    &__button {
      background-color: black;
      color: orangered;
      font-size: 2rem;
      cursor: pointer;
      padding: 1rem;
      border-color: rgba(139, 0, 0, 0.64);
      border-radius: 15px;
      user-select: none;

      &:hover,
      &:active,
      &:focus {
        outline: none;
        box-shadow: 5px 5px 10px red;
      }
    }
  }

  .bar {
    position: absolute;
    background: rgba(59, 128, 112, 0.62);

    &--diagonal {
      width: 2px;
      height: 100%;
      transform-origin: center center;

      &--cw {
        transform: skewX(30deg);
      }

      &--ccw {
        transform: skewX(-30deg);
      }
    }

    &--horizontal {
      left: 0;
      width: 100%;
      height: 2px;
    }
  }

  .player {
    user-select: none;
    width: 70px;
    height: 70px;
    z-index: 12;
    pointer-events: none;
    position: absolute;
    transition: all 300ms ease-in-out;
    transform: rotateY(0);
    transform-origin: center center;

    &--dead {
      transform: rotate(90deg) !important;
      transition: all 250ms ease-out;
    }

    &__image {
      width: 100%;
      transform: translateY(-25px) translateX(-5px);
    }
  }

  .target {
    user-select: none;
    width: 50px;
    height: 50px;
    z-index: 11;
    pointer-events: none;
    position: absolute;

    &__image {
      width: 100%;
    }

    &--gg {
      transform: scale(10, 10);
      transform-origin: center center;
    }
  }

  .loc {
    user-select: none;
    position: absolute;
    background-color: red;
    cursor: pointer;

    &--circle {
      border-radius: 50%;
    }

    &--square {
      border-radius: unset;
    }

    &--triangle {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 20px solid red;
      transform: translateY(-5px);

      &.loc--visited::after {
        left: -5px;
        top: 20px;
      }
    }

    &:hover {
      box-shadow: 0 2px 3px #3b8070;
      transform: scale(1.2);
    }

    &--green {
      background-color: green;
    }

    &--blue {
      background-color: blue;
    }

    &--yellow {
      background-color: yellow;
    }

    &--red {
      background-color: red;
    }

    &--visited::after {
      width: 10px;
      height: 10px;
      content: "";
      color: gray;
      background-color: black;
      position: absolute;
      left: 16px;
      top: 16px;
      z-index: 10;
      pointer-events: none;
      border-radius: 50%;
    }
  }
</style>
