# Mathematical concepts

The main goal of this story is to present, in an amusing way, several concepts related to **reflection and rotation symmetry**.

We start by exploring the concept of reflection symmetry: first, by using images that only have one symmetry axis, and then by studying rosettes with several axes. Finally, we move on to rosettes without symmetry axes, and we distinguish (i.e. classify) them according to the number of rotation symmetries.

## What is a symmetry?

When speaking about symmetries, it is natural to introduce the concept of isometry. An **isometry** is a function which preserves distances: if two points *A* and *B* are transformed into *A’* and *B’*, then *dist(A,B)=dist(A’,B’)*.

![Isometry](/stories/symm-2/img/iso.png =360x300)

A **symmetry of a figure** is an isometry that maps the figure exactly onto itself, so that it looks the same before and after the mapping: it should not be possible to distinguish the initial figure from the final one (either by shape, position, or colour).

## Reflection symmetry

Note that to identify a reflection symmetry is tantamount to find a symmetry axis.

In the story, a 
[“mirror maze”](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)
 is available (link to the IO3 Repository).
By using this tool, the user gets acquainted with: 1) the fact that the segment joining a point *A* and its reflected image *A’* is perpendicular to the reflection line *r* and 2) both points (*A* and *A’*) are at equal distance from *r*.

![Reflection](/stories/symm-2/img/AA1.jpg =360x169)

## Rotation symmetry

A rotation symmetry of an image is a rotation which takes the image exactly onto itself.

![Watch the movie here](/stories/symm-2/video/ros_C_4.mp4 =640x360)

In the story, a
[“half-turn maze”](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)
is also available (link to the IO3 Repository). By exploring this tool, the user becomes more familiar to a specific kind of rotation, the one of *180* degrees. In particular, he/she may observe that the rotation center *O* is the midpoint of *[AA’]*.

![Reflection](/stories/symm-2/img/AOA1.jpg =360x136)

&nbsp;

## Rosettes

We will now consider flat images which have some kind of symmetry of rotation or reflection, the so-called rosettes.

With respect to their symmetry, rosettes can be divided into two classes: **dihedral**, if they have at least one reflection symmetry (so there exits at least one symmetry axis), and **cyclic**, if they don’t possess any reflection symmetry.

The
[“Rosette Game”](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)
presented in the story is a game in which the player must choose the rosettes with reflection symmetry, i.e. the dihedral rosettes.

And how can we distinguish dihedral rosettes from each other? A natural way is counting their symmetry axes… That is precisely the goal of
[“Bag Game I”:](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)
by playing it, we are classifying dihedral rosettes according to their symmetry.

![Bag Game I](/stories/symm-2/img/rosaceas-diedrais.png =1000x194)

**Remark**: In the story, we only considered rosettes with 6 or less symmetry axes, however we can create rosettes with as many symmetry axes as we wish. So, there are infinitely many
dihedral rosettes^[Similarly, there are infinitely many cyclic rosettes]
, all of different symmetry types…

![Bag Game I](/stories/symm-2/img/rosaceas-d.png =1000x179)

And how can we distinguish (classify) cyclic rosettes?

![Watch the movie here](/stories/symm-2/video/rot_3.mp4 =640x360)

In the previous example, the rosette has **3** rotation symmetries. However, even if we hadn’t checked the rotation symmetries, we would know that the rosette had, at least, **one** rotation symmetry: the **identity**, which corresponds to a rotation of *0º* (or, equivalently, of *360º*), the so called 
trivial symmetry^[In general, when we ask if there is a symmetry, we are thinking about a non-trivial symmetry.]
.

We classify the cyclic rosettes according to the number of the rotation symmetries they have. That is precisely the goal of 
[“Bag Game II”](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)
.

![Bag Game I](/stories/symm-2/img/rosaceas-ciclicas.png =1000x195)

Note that dihedral rosettes also have rotation symmetries and in a dihedral rosette there are as many reflection symmetries as rotation symmetries.

![Watch the movie here](/stories/symm-2/video/ros_D_4.mp4 =640x360)

&nbsp;

# Didactical remarks

By using storytelling and games, our main goal is to lead young learners to discover Symmetry in a playful way.

The presentation starts with some concrete experiments carried out by the characters. The experiments are thoroughly illustrated by the animations and images provided, and help to present in an intuitive way various mathematical concepts: reflection symmetry, rotation symmetry, classification of rosettes according to their symmetry. The understanding of these concepts is deepened throughout the story, and the young learners have the opportunity to consolidate their knowledge, in a playful way, by solving the various challenges proposed in the available apps.

The story is self-contained and should not require consulting additional materials. For this purpose, two factors were taken into account: 1) almost no need of previous knowledge of the subject: the only concepts not explained in the story are those of “symmetry axis” (and “reflection symmetry”), and “rotation”, with which 7-10 year old students should be familiar; 2) adequacy of the contents to the 7/10 age group: in what concerns reflection symmetry, it is a subject addressed in the Portuguese Mathematics curriculum for the “Primary School” (6/9 years); on the other hand, although nowadays rotation symmetry is only included in the 6th degree curriculum (11 year old students), some years ago, it was included in the Portuguese “Primary School” curriculum. Our approach to this subject differs, however, from what is usually used in formal education: by using storytelling, by providing visually attractive interactive examples, and by offering a large number of games and challenges in the form of apps.

In addition to the mathematical topics already mentioned, there is one which is not included in the academic curricula: “classification of rosettes”. The purpose of introducing this subject is to convey a broader geometric idea about rosettes and their symmetry.

Additional experiments similar to the ones presented in the story can be developed by educators. Below, we make a proposal for experiments:

`*` Checking if an image has symmetry axes can be physically simulated with students, by using a mirror.

`*` The games “Rosette Games”, “Bag Game I” and “Bag Game II”, can be played physically: it is only necessary to print cards containing different types of rosettes. Such rosettes can even be built by the students themselves: for creating them, we suggest using the Atractor's (free) program 
[“GeCla”](http://www.atractor.pt/mat/GeCla/index-_en.html)
.

&nbsp;

# About the apps

There are 6 apps accompanying the story: 1 is dedicated to testing if a given image has a symmetry axis, by using a mirror; 3 are dedicated to the classification of rosettes; and the remaining 2 correspond to mazes through which it is possible to explore properties related to, respectively, reflection and rotation symmetry.

All the apps were programmed in JavaScript and should be usable both on PCs and tablets/smartphones.

Below, we present a small description of each app. Links both for the apps and for explanatory films about them (in Mathina’s YouTube channel) are also provided.

&nbsp;

## [Game 1 - Using mirrors (I and II)](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

An image is provided. The user is invited to check if the given image has a symmetry axis. For that, he/she can move the existing mirror, by dragging it back and forth.

@[youtube](OYrrdu4y_7E)

&nbsp;

## [Game 2 - Rosette Game](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

A set of 8 rosettes is presented. The user is invited to choose the 4 rosettes with symmetry axes. After choosing the correct rosettes and clicking
![Confirm](/stories/symm-2/img/confirm.png =40x40),
the program shows a new set of 8 rosettes. A total of 3 sets are shown. The game is solved when all "good" rosettes (i.e. with symmetry axes) are selected.

@[youtube](OYrrdu4y_7E)

&nbsp;

## [Game 3 - Bag Game I](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

A set of 12 rosettes is presented. The user is invited to drag each rosette to the corresponding bag, according to its number of symmetry axes: bag 1 contains the rosettes which only have 1 symmetry axis; bag 2, those only with 2 symmetry axes; .... By clicking
![Symmetry axis](/stories/symm-2/img/vertical.png =40x40),
it is possible to get help for counting the number of symmetry axes.

@[youtube](OYrrdu4y_7E)

&nbsp;

## [Game 4 - Bag Game II](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

This app is similar to Game 3. However, instead of counting symmetry axes, the user should count the number of rotation symmetries of each rosette.

@[youtube](OYrrdu4y_7E)

&nbsp;

## [Game 5 - Mirror maze](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

Two mazes are shown side by side: the original one (on the left) and the reflected one on the right. The user should go from the entrance of the original maze
![Entrance](/stories/symm-2/img/pegadas.png =40x40)
up to the goal
![Goal](/stories/symm-2/img/exit.png =60x30).
However, the original maze will get more and more transparent, and, after a certain point, it's impossible to see it. So, to solve the maze, one should look at the reflected maze. Only for training purposes, the user can click the
![Lantern](/stories/symm-2/img/lanterna.png =40x40)
button and see both mazes all the time. 

@[youtube](OYrrdu4y_7E)

&nbsp;


## [Game 6 - Half-turn maze](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

This app is similar to Game 5. However, instead of the (right) maze being reflected, it is rotated by 180º.

@[youtube](OYrrdu4y_7E)
