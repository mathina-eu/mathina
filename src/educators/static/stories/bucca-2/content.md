# Mathematical concepts
From a mathematical content point of view, the purpose of this story is to introduce, in a playful and informal way, a variant of one of the most famous cryptographic methods of antiquity: the Caesar cipher. 

It is a simple mono-alphabetic substitution cipher. This means that each letter of the alphabet is associated with a letter of the same alphabet in a unique way and so that this correspondence associates different letters to different letters.

![Example of a substitution cipher] (/stories/symm-1/img/_align-center_/building_toys_I-tri.png =225x110)

The way in which the letters are associated one with another one in a substitution cipher is the key of the cipher, so that one encrypts a message simply by replacing each letter with the corresponding one according to the key. The decoding method is the same, but the correspondence is followed in reverse. For example, with the key from the previous image, the word "XXXXXXXX" is encrypted in the word "YYYYYYYYY".


Image: example of an encryption and decryption with the example key above

In its original form, the Caesar cipher is, among the substitution ciphers, very simple: the key in fact consists in associating to each letter the third letter from it in the alphabet: the letter "A" is associated with the letter "D",  "B" to "E" and so on ... It can be generalized by using, instead of 3 as in the original, a different number. To know the key we just need to know the number of "jumps" we have to do. If we are looking for the letter we had to associate to the letter "Z", we will have to start over from the beginning of the alphabet. For example, the letter "Z", with the standard Caesar cipher, is associated with the letter "C".


![The original Caesar circle](/stories/bucca-2/img/caesarkey.png)


For this reason, to use a Caesar cipher quickly, it is often convenient to represent the letters of the alphabet not on a line, but in a circle so that in order to jump from one letter to another, it is never necessary to start from the beginning: the letters follow each other without interruptions. 

![The alphabet placed in a circle for use with Caesar cipher](/stories/bucca-2/img/caesarcircle.png)

Often, in the literature, one speaks of Caesar cipher even when the jumps are not 3 but an arbitrarily chosen number (the cipher key). In the story "The Talking Parrot", for example, Mathina meets a parrot that expresses itself in a particular language: the parrot answers in code using the Caesar cipher with one jump. When asked "Do you want cookies?", the animal replies "Z-F-T!". The letter following "Y" is "Z" while the ones following the "E" and "S" are "F" and "T" respectively: the gluttonous bird promptly answers "YES!" to Mathina's question!
 
In the story, Mathina receives as a gift a jewel with two concentric circles, engraved with the letters of the alphabet on each circle. This allows her to easily encrypt and decrypt messages with the Caesar cipher. To encrypt just search for a letter on the internal drive and choose the letter in the same position on the external drive. To decipher the same thing, but by reading the letters from the outside to the inside.

![The Caesar jewel used in the story](/stories/bucca-2/img/caesarjewel.png)


In the two interactive experiences of the story, readers are involved respectively in the encryption process, [known the key](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12) and decryption process, [without knowing the key](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).


# Didactical remarks

The Caesar cipher is one of the most famous cryptographic methods of antiquity. Its name derives from the Roman general Julius Caesar, who, according to texts by Suetonius, used the cipher for military communications. 

In the story of Mathina, Caesar's cipher is only presented on a general level, but a more in-depth analysis of it and some of its characteristics are possible for 7-10-year-old children without any prior knowledge being required. The following are some ideas for activities that can be carried out after reading the story. 

`*` How secure is the Caesar cipher? Not much, because after a maximum of 25 decoding attempts (i.e. the number of letters of the alphabet minus one), we will be able to discover the key and the plaintext. 

`*` Does encrypting a text twice, one in a row, even with different keys, make the hidden message more secure? No, on the contrary, it is equivalent to applying Caesar's cipher using the sum of the two keys used as a key. 

`*` The educator could take a cue from Mathina's story for a first introduction to modular arithmetic. 

These insights are taken up in the story ["The lost treasure"](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12), intended for readers in the 11 to 14 age group. Both "The Talking Parrot" and "The Lost Treasure" are accessible to readers in the 7-14 age range and can be read one after the other. By using storytelling and games, our main goal is to lead children to discover Symmetry in a playful way.


&nbsp;

# About the apps

There are two interactive experiences in the course of the story, connected to two fundamental moments in the process of encrypting and decrypting the message.

All the apps were programmed in JavaScript and should be usable both on PCs and tablets/smartphones.
Below, we present a small description of each app. Links both for the apps and for explanatory films about them (in Mathina’s YouTube channel) are also provided.

&nbsp;

## [Game 1 - The jewel I](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

In the first experience, the key to the method is the one used by the parrot John, that is, the jump of one letter. In this app, the user must try to correctly encrypt some words using the Caesar cipher with one jump.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-1/transcripts/Script1.pdf)

&nbsp;

## [Game 2 - The jewel II](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

In the second app, the user must instead try to decrypt a message. He/she only knows that the ciphertext was obtained with a Caesar cipher. In the app, there is a version of the jewel of the story in which it is possible to rotate the discs with the alphabet and this movement has the effect of changing the key.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-1/transcripts/Script2.pdf)

&nbsp;


