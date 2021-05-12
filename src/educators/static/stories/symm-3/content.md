# Mathematical concepts

The main goal of this story is to present, in an amusing way, several concepts related to the symmetry of friezes: their classification and how to stamp them.

Concerning the frieze classification, a surprising result will be presented: the existence of only 7 types of friezes, with different symmetries. In the story, through the experiences of the characters Leo and Mathina, and in a constructive way, the differences between the 7 types of friezes are shown, which leads to a natural way of classifying the friezes. Simultaneously, natural methods for stamping some of the friezes using different shapes are presented.

In the course of the story, some fundamental concepts/results are mentioned: "notion of frieze", "notion of symmetry", "classification of friezes according to their symmetry", "construction of stamps for the friezes", ... In what follows, we explore each of these topics.

## What is a frieze?

In the course of this story, no definition of **frieze** is presented.

If we want to formalize this concept, we can consider a frieze as:

`*` A 
region^[Note that the mentioned "region" in the plane for this frieze is unlimited on the left and on the right. The picture only shows a limited part of that region.]
 in the plane for which there are translations (in just one direction), which do not change the way the frieze looks: the frieze looks the same, before and after the translation;

![Watch the movie here](/stories/symm-3/video/_align-center_/Anim_Translacao_2.mp4 =640x360)

`*` In addition, there is one such translation so that any other such translation is an integer multiple of that one.

![Watch the movie here](/stories/symm-3/video/_align-center_/Anim_Translacao_3.mp4 =640x360)

**Remark 1**: this last property excludes a line as an example of a frieze. Indeed, if we consider a translation associated to any vector *v* of that line, which obviously sends the line onto itself, then the translation associated to *0.5 v* (which is not an integer multiple of that one) still sends the line onto itself.

![Translation associated to 0.5*v](/stories/symm-3/img/_align-center_/Reta_Vetores2.png =369x150)

**Remark 2**: from the given definition, it follows that a frieze is not bounded.

## What is a symmetry?

It is not possible to speak about symmetries without mentioning the concept of isometry. An isometry is a function which preserves distances: if two points *A* and *B* are transformed into *A’* and *B’*, then *dist(A,B)=dist(A’,B’)*.

![Isometry](/stories/symm-3/img/_align-center_/iso.png =300x250)

In the story, four different isometries (in the following order) - reflection, rotation, glide reflection and translation - are mentioned. This is the complete list of isometries in the plane: it is possible to prove that there are no other ones.

A **symmetry of a figure** is an isometry that maps the figure exactly onto itself, so that it looks the same before and after the mapping: it should not be possible to distinguish the initial figure from the final one (either by shape, position, or colour).

The following animations -- 
[**anim 1**](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg1)
, 
[**anim 2**](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg2)
 and 
[**anim 3**](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg3)
 -- which are available in the story, illustrate, respectively, a rotation symmetry, a glide reflection symmetry and a translation symmetry of 3 different friezes.
 
 ## Classification of friezes
 
Throughout the story, and after receiving a large number of frieze images provided by the wizard, the characters Mathina and Leo, in an experimental way, discover the existence of 7 types of friezes according to their symmetry.
 
Such discovery is achieved, in a constructive way, by studying the frieze symmetries. Below, we present a summary of the steps taken:

`*` **Reflection Symmetry**: the first difference perceived by the characters is that there are friezes which have
symmetry axes^[We are assuming the direction of the translation symmetries to be horizontal.]
 -- or, in another formulation, friezes which have 
[reflection symmetry](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg4)
 -- and others which do not. Examining the friezes more closely, new differences arise: there are friezes which only have vertical symmetry axes, others only have an horizontal symmetry axis and there are others which have both types. In the story, the friezes with symmetry axes are separated into 3 bags: 
[1, 2 and 3](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg5)
.

`*` **Rotation Symmetry**: After exploring reflection symmetry, it is natural to move on to another isometry, for instance
[rotation](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg6). 
Let us now consider 2 different cases: 1) the friezes without reflection symmetry (which, in the story, are outside the bags) and 2) the friezes with reflection symmetry:

  * in the first case, let us select the friezes which have rotation symmetry and consider a 
[new bag (the 4th) for them](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg7)
;

  * in the second case, there is a relevant difference concerning the friezes in **bag 1**: here, 
[there are friezes which have rotation symmetry and others that do not](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg8)
. Let us separate these 2 kinds of friezes, by adding a new bag (the 5th) for the friezes, previously in bag 1, which have also rotation symmetry.

**Remark 1**: Notice that, until now, by studying the reflection and rotation symmetries of the friezes, we have already reached 5 different types (“groups”) of friezes:

| Bag 1| Bag 2 | Bag 3 | Bag 4 | Bag 5 |
| ------ | ------ | ------ | ------ | ------ |
|![Bag 1](/stories/symm-3/img/_align-center_/bag1.jpg =150x150)|![Bag 2](/stories/symm-3/img/_align-center_/bag2.jpg =150x150)|![Bag 3](/stories/symm-3/img/_align-center_/bag3.jpg =150x150)|![Bag 4](/stories/symm-3/img/_align-center_/bag4.jpg =150x150)|![Bag 5](/stories/symm-3/img/_align-center_/bag5.jpg =150x150)|
|Vertical reflection symmetry| No vertical reflection symmetry  | Vertical reflection symmetry | No vertical reflection symmetry | Vertical reflection symmetry |
|No horizontal reflection symmetry| Horizontal reflection symmetry | Horizontal reflection symmetry | No horizontal reflection symmetry | No horizontal reflection symmetry |
|No rotation symmetry|  |  | Rotation symmetry | Rotation symmetry |

**Remark 2**: By analyzing the friezes in Bag 2, we may notice that none of them have rotation symmetry. On the contrary, all friezes in Bag 3 have rotation symmetry.

**Remark 3**: There are friezes (for now, outside the bags) which have neither reflection symmetry nor rotation symmetry. 

`*` **Glide Reflection Symmetry**: Moving on to the glide reflection symmetry (in the story this kind of symmetry is found by chance, when 
[Leo stamps a frieze incorrectly](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg9)
, we may conclude that there are 2 different kinds of friezes, among thouse outside the bags: some have glide reflection symmetry, while others don’t. Let us split them in two bags: the 6th, which contain the friezes with glide reflection symmetry and the 7th for the remaining friezes.

**Remark 4**: Note that at this stage we have already found 7 different types of friezes according to their symmetry:

| Bag 1| Bag 2 | Bag 3 | Bag 4 | Bag 5 | Bag 6 | Bag 7 |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|![Bag 1](/stories/symm-3/img/_align-center_/bag1.jpg =100x100)|![Bag 2](/stories/symm-3/img/_align-center_/bag2.jpg =100x100)|![Bag 3](/stories/symm-3/img/_align-center_/bag3.jpg =100x100)|![Bag 4](/stories/symm-3/img/_align-center_/bag4.jpg =100x100)|![Bag 5](/stories/symm-3/img/_align-center_/bag5.jpg =100x100)|![Bag 6](/stories/symm-3/img/_align-center_/bag6.jpg =100x100)|![Bag 7](/stories/symm-3/img/_align-center_/bag7.jpg =100x100)|
|Vertical reflection symmetry| No vertical reflection symmetry  | Vertical reflection symmetry | No vertical reflection symmetry | Vertical reflection symmetry | No vertical reflection symmetry | No vertical reflection symmetry |
|No horizontal reflection symmetry| Horizontal reflection symmetry | Horizontal reflection symmetry | No horizontal reflection symmetry | No horizontal reflection symmetry | No horizontal reflection symmetry | No horizontal reflection symmetry |
|No rotation symmetry|  |  | Rotation symmetry | Rotation symmetry | No rotation symmetry | No rotation symmetry |
|  |  |  |  |  | Glide reflection symmetry | No glide reflection symmetry |

`*` **Translation Symmetry**: by definition, 
[all friezes have translation symmetry](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg10)

**Remark 5**: The friezes in bag 7 correspond to the ones **which only have translation symmetry**.

By studying the symmetries of the friezes which were presented, we have concluded that there are at least 7 types of friezes according to their symmetry. In reality, it is possible to prove that **there are only those 7 types**! However, the demonstration of this result is beyond the scope of this text.

The main goal of our approach was to highlight the differences between the 7 types (groups) of friezes in a constructive way.

&nbsp;

# Didactical remarks

By using storytelling and games, our main goal is to lead young learners to discover Symmetry in a playful way.

Starting with some concrete experiments carried out by the characters, experiments which are thoroughly illustrated by the animations and images provided, we present in an intuitive way various mathematical concepts: the stamp of a frieze, reflection/rotation/glide reflection/translation symmetries, classification of friezes according to their symmetries. The understanding of these concepts is deepened throughout the story, and the young learners have the opportunity to consolidate their knowledge, in a playful way, by solving the various challenges proposed in the available apps.

The story is self-contained and should not require consulting additional materials. For this purpose, two factors were taken into account: 1) almost no need of previous knowledge of the subject: the only concepts not explained in the story are those of “symmetry axis” (or “reflection symmetry”) and “rotation”, with which 11-14 year old students should be familiar; 2) adequacy of the contents to the 11/14 age group: in fact, most of the concepts covered in the story -- the 4 isometries in the plane (reflection, rotation, translation, glide reflection) and the symmetry of a flat figure -- are subjects addressed in the Portuguese Mathematics curriculum for the “Lower Secondary” (12/14 years). Our approach to this subject differs, however, from what is usually used in formal education: by using storytelling, by providing visually attractive interactive examples, and by offering a large number of games and challenges in the form of apps.

In addition to the mathematical topics already mentioned, there is one which is not included in the academic curricula: “imprinting friezes with the use of stamps”. By introducing this subject, we intend to convey a broader geometric idea about the friezes and how they can be physically produced. Note, however, that our goal is just to give a general idea about the subject, without much detail: for instance, only 4 stamps are presented (instead of 7), given the greater complexity of the shapes involved in the other three.

Additional experiments similar to the ones presented in the story can be developed by educators. Below, we make a proposal for two experiments:

`*` Stamping friezes: 
  * the experiment of "stamping friezes with a cylinder" can be physically simulated with students: using a roll on which a stamp has been glued, it is possible to reproduce the (virtual) experiment of imprinting friezes on the plane.
  
`*` Friezes classification:
  * a complementary experiment to those presented in the story is to ask students to draw examples of the 7 different types of friezes. And, in the end, the students can confirm their answers in a similar way to that used in the app "Labeling the bags". 

&nbsp;

# About the apps

There are 8 apps accompanying the story: 6 are dedicated to the classification of friezes and the remaining 2 to the stamping of friezes.

All the apps were programmed in JavaScript and should be usable both on PCs and tablets/smartphones.

Below, we present a small description of each app. Links both for the apps and for explanatory films about them (in Mathina’s YouTube channel) are also provided.

&nbsp;

## [Game 1 - Stamping friezes with a “roll”](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg11)

In this app, the user is invited to choose an image from a total of 20 figures. Then, the creation of a cylinder with the selected image is presented. Clicking 
![Stamp](/stories/symm-3/img/stamp.png =40x40)
, the user can watch the cylinder stamping a frieze which has the chosen image as motif.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-3/transcripts/Script3.pdf)

&nbsp;

## [Game 2 - Separating friezes with symmetry axes](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg12)

A set of 7 friezes is presented. The user is invited to choose the 4 friezes with symmetry axes. After choosing the correct friezes and clicking
![Confirm](/stories/symm-3/img/confirm.png =40x40)
, the program shows a new set of 7 friezes. A total of 3 sets are shown. The game is solved when all "good" friezes (i.e. with symmetry axes) are selected.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-3/transcripts/Script3.pdf)

&nbsp;

## [Game 3 - Separating the friezes with symmetry axes into 3 bags](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg13)

A set of 12 friezes is presented. The user is invited to drag each frieze to the corresponding bag, according to its reflection symmetry: **bag 1** contains the friezes which only have vertical symmetry axes; **bag 2**, those only with a horizontal symmetry axis; and **bag 3** those with vertical and horizontal axes.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-3/transcripts/Script3.pdf)

&nbsp;

## [Game 4 - Stamping friezes with a “board”](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg14)

In this app, the user is invited to choose an image from a total of 20 figures. Then, the user can watch a board stamping a frieze, with both vertical and horizontal symmetry axes, which has the chosen image as motif.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-3/transcripts/Script3.pdf)

&nbsp;

## [Game 5 - Separating the friezes with rotation symmetry](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg15)

This app is similar to **Game 3**. However, instead of choosing friezes with symmetry axes, the user should pick the ones with rotation symmetry. 

&nbsp;


## [Game 6 - Still the friezes with rotation symmetry…](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg16)

This app is similar to **Game 5**. The only difference concerns the friezes displayed: here, the friezes presented are the ones which belonged originally to bag 1.

&nbsp;


## [Game 7 - Separating the friezes with glide reflection symmetry](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg17)

This app is similar to **Game 3**. However, instead of choosing friezes with symmetry axes, the user should pick the ones with glide reflection symmetry.

&nbsp;


## [Game 8 - Labeling the bags](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg18)

In this app, the user can observe the 7 bags obtained and see the friezes inside. For each bag, the user is invited to select, from a list of symbols – 
![horizontal reflection](/stories/symm-3/img/Icon-refH.png =40x40)
 (horizontal reflection),
![vertical reflection](/stories/symm-3/img/Icon-refV.png =40x40)
 (vertical reflection),
![rotation](/stories/symm-3/img/Icon-rot.png =40x40)
 (rotation),
![glide reflection](/stories/symm-3/img/Icon-refDesl.png =40x40)
 (glide reflection),
![translation](/stories/symm-3/img/Icon-trans.png =40x40)
 (translation)
 –,  those which correspond to the existing symmetries on the friezes of the bag.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-3/transcripts/Script3.pdf)
