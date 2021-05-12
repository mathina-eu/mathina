# Mathematical concepts
From a mathematical content point of view, the purpose of this story is to introduce modular arithmetic to the reader, to examine the security of Caesar's cipher and to propose a cryptographic method similar to Caesar's cipher but much more secure: the Vigenère cipher.

In the story, Mathina is already familiar with Caesar's cipher so it is advisable to first read the story ["The Talking Parrot"]($HUB_URL/story/the-talking-parrot/) in which it is presented. In this story, Angela guides Mathina towards the discovery of a particular way of making sums with numbers: modular arithmetic.

Modular arithmetic "modulo n" works like the usual arithmetic but, in a sense, it only uses numbers between 0 and n-1. If we have two numbers a and b chosen between 0 and n-1, we can add, subtract or multiply them. To do this, we do the operation normally and then calculate the remainder of the integer division of the number obtained by n: this will be the result of the operation with modular arithmetic (we say, in mathematical language, that I calculate the sum, difference or the product "modulo n").
For example, if the modulus n is equal to 12, 10 + 5 equals 3 because 10 + 5 = 15 (the result of the usual sum) and the remainder of dividing 15 by 12 is 3. Coming to terms with modular arithmetic it's the same as dealing with a clock with n hours (this analogy is also repeated in one of the Apps of this story). The sum of the example just done, made on a clock does not surprise us: if we start at 10 and add 5 hours, the hand will stop at 3!


The connection with the Caesar cipher is that if we associate the numbers from 0 to 25, in order, to the letters "A", "B", ..., "Z", applying the Caesar cipher with k jumps is equivalent to adding k modulo 25 to the numbers that correspond to the various letters. Furthermore, with this interpretation, the decryption operation is simply a subtraction modulo 25.

This point of view also serves Angela to make Mathina understand that applying Caesar's cipher twice does not make the message more secure: double effort is made to obtain nothing new. In fact, using the cipher twice in a row, with key k and h respectively, is like using it only once with key k + h.

A variant of Caesar's cipher, the Vigenère cipher, is also presented in the story. It is still a substitution cipher, like the Caesar cipher but works by partitioning the letters into multiple sets, each of which is encrypted using the Caesar cipher with a different key. The key is therefore a list of s numbers: the first will tell us how to encrypt the first letter and the letters at position s + 1, 2s + 1, ... the second number the second letter and the letters at position s + 2, 2s + 2, ... and so on. In the story, the key used is composed of two numbers: in practice, the ciphertext is obtained by using the Caesar cipher on the odd letters with the key equal to the first of the two numbers and on the letters at even position with the key given by the second of the two numbers. For example, if the key were the pair of numbers (1,3), the word "MATHINA" is encrypted by "adding" 1 to the letters of odd position and "adding" 3 to the letters of even position. We then get the word "NDUKJOB".


![Vigenere cipher](/stories/bucca-3/img/_align-center_/ndukjob.png)



# Didactical remarks

Some concepts used in this story are presented more widely in the story ["The Talking Parrot"]($HUB_URL/story/the-talking-parrot/), intended for readers in the age group 7 to 11 years. Both "The Talking Parrot" and "The Lost Treasure" are accessible to readers in the 7-14 age group. Reading "The Talking Parrot" before "The Lost Treasure" is recommended.

Modular arithmetic presents many interesting didactic ideas. By varying n, different algebraic structures can be obtained and it is interesting to study some aspects related to abstract algebra. Here are some ideas that can be tackled by simply knowing the concept of quotient and remainder of the division by an integer.

`*` *Look for some invertible elements with respect to the product.*
The number 1 is a neutral element for the product: each non-zero element multiplied by 1 gives the number itself as a result. The inverse of a number a, if it exists, is that number b such that a times b (modulo n) is equal to 1. For example, if n = 7, the number 3 multiplied by 5 is 15, which modulo 7, that is, on a clock with 7 hours, it is equal to 1. This means that 5 is the inverse of 3 modulo 7!

`*` *Characterization of the invertible elements with respect to the product.*
A more in-depth analysis shows that only numbers that are coprime with n have inverse and therefore if n is prime all numbers, except 0, have inverse modulo n.

`*` *The discrete logarithm modulo n*.
This concept, defined as usual as the inverse operation of exponentiation (modulo n), is one of the typical examples of "one-way function" on which modern cryptographic methods are also based. For more information see [here]($HUB_URL/story/the-man-in-the-middle/).

The Vigenère cipher looks like a simple variant of the Caesar cipher but it is not: the fact of not knowing in general how long the key is, constitutes a significant obstacle to the cipher attack, so much so that these ciphers were considered unassailable until last century. In reality, with statistical techniques that analyze the frequency of letters in the text, which can be used effectively by a computer, even the Vigenère cipher is nowadays not very secure.

Despite this fact, a variant of the Vigenère cipher in which the key is as long as the text itself and is randomly chosen, called the Vernam cipher, is the safest cipher from a mathematical point of view: a person who wants to decode the message without knowing the key, the only possible approach is to try all the keys! In practice, this cipher is never used because it requires an exchange of a lot of information between the parties.


&nbsp;

# About the apps

The interactive experiences encountered in the story are all variants of the Caesar cipher presented in the story “The Talking Parrot”. They are mainly used to deepen the mathematics underlying this cipher, observing for example that the coding and decoding operations are very reminiscent of addition and subtraction. The cipher is then modified and complicated by actually passing from the original Caesar cipher to a new cipher, much more secure, called the Vigenère cipher.

All apps are programmed in Javascript and can be used on computers, tablets and smartphones. Below is a brief description of the interactive experiences with links to the explanatory videos on Mathina's YouTube channel.

&nbsp;

## [Game 1 - The jewel I]($HUB_URL/story/the-lost-treasure/?actionLink=app1)

In this app, the user must try to correctly encrypt some words using the Caesar cipher with a key chosen by the computer. This experience is used to familiarize the user with Caesar's cipher and, if the user has read the story "The Talking Parrot", to provide a reference to the concepts seen previously.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script1.pdf)

&nbsp;

## [Game 2 - The jewel II]($HUB_URL/story/the-lost-treasure/?actionLink=app2)

The user has to decipher a message with Caesar's cipher but with an additional difficulty: the plaintext "Let's meet tomorrow morning at the bar near the pier on the island" is written backwards. This is a technical gimmick to make Caesar's cipher more complicated and is done for plot purposes.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script2.pdf)

&nbsp;

## [Game 3 - Sum on the clock]($HUB_URL/story/the-lost-treasure/?actionLink=app3)

In this experience, the Caesar cipher presented earlier is analyzed mathematically. This time the interface is that of a clock with a single hand that aims to present addition in modular arithmetic. The initial question is like this: "Let's try to calculate 12 + 5 on a 14-hour clock". The user can move the hour hand on this watch to 14 hours to try to understand what the final answer will be (in this specific case 3 is the correct answer).

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;
## [Game 4 - Caesar cipher repeated I]($HUB_URL/story/the-lost-treasure/?actionLink=app4)

In this experience, messages are encoded and decoded using Caesar's cipher twice in succession. The coding method is exactly the same as the experiences of the story "The Talking Parrot". The only difference is that this time the operation is repeated twice.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script4.pdf)

&nbsp;

## [Game 5 - Caesar cipher repeated II]($HUB_URL/story/the-lost-treasure/?actionLink=app5)

This experience concludes the analysis of history to observe that the Caesar cipher repeated 2 times in a row has nothing different from the usual Caesar cipher. Just change the key. To do this, the user is presented with two Caesar disks combined as in the previous experience and is asked to place a third Caesar disk so that the result of the encoding operation is the same.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script5.pdf)

&nbsp;

## [Game 6 - The jewel III]($HUB_URL/story/the-lost-treasure/?actionLink=app6)

The experience is identical to the first, with the only difference that this time the message cannot be decoded, since it was not encrypted with Caesar's cipher. We emphasize that in the story this is said to the user first, so that the experience of this app is not frustrating. The idea is just check that in fact Caesar's disk does not decode the message presented in this case.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script6.pdf)

&nbsp;

## [Game 7 - The jewel IV]($HUB_URL/story/the-lost-treasure/?actionLink=app7)

This experience is identical to the previous one, it is presented to the user only to focus on a particular letter of the text, making sure to translate it as an "E", thus experiencing exactly what Mathina and Angela are doing in the story.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script7.pdf)

&nbsp;

## [Game 8 - Word by word]($HUB_URL/story/the-lost-treasure/?actionLink=app8)

This experience is a first step towards the Vigenère cipher. The text is encoded using two Caesar discs, one for even words and one for odd words. As it will be discovered in the story, this is not yet the right approach to actually decode the message and this experience aims to check, in person, that it is not the correct method.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script8.pdf)

&nbsp;

## [Game 9 - A new cipher]($HUB_URL/story/the-lost-treasure/?actionLink=app9)

The concluding experience of the story is the Vigenère cipher on two letters. Using two Caesar discs, the even and odd letters are changed respectively. In this way, following the suggestions of the story, you can easily decode the message. Then there is the possibility of repeating this experience with different messages and keys.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script9.pdf)

&nbsp;
