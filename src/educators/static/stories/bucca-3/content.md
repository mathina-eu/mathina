# Mathematical concepts
he purpose of this story is to underline, through the attack known as "Man in the middle", the importance of digital signature in cryptographic communication.
In the first chapter of the story, Angela explains to Mathina and Leo the Diffie-Hellman key exchange system, a cryptographic system that allows you to share secret information through unencrypted, and indeed publicly available, communications.
The method is based on the so-called "One-way function", i.e. invertible functions which are very easily computable in one direction, but extremely difficult to compute in the other.
In the story, reference is made, as an example, to the difference in difficulty perceived by Leo in primary school between multiplications and divisions, which although mathematically are one the inverse of the other, have different perceived difficulties by the students.
The Diffie-Hellman method actually uses the discrete logarithm, i.e. the calculation of the logarithm in modular arithmetic (for a hint of what modular arithmetic is, see link repository IO3), an operation that is extremely more complex from the point of view of computational difficulty than exponentiation.

Public key cryptography, on the other hand, involves an asymmetry in the use of keys. The first, the private one, will be kept secret by the user after generation; it will only serve to decrypt received messages. The other, the public one, can be made publicly available to anyone who wants to communicate with the user and is used only to encrypt the message (this implies that whoever encrypts a message giving as recipients only other people will not be able to decrypt their own message)
This eliminates the need for the user to communicate a different secret key to each person who wants to communicate with him: this is particularly useful in the case of "one-to-many" communications, such as in the case of banking institutions or government agencies.

Public key cryptography can also be used "backward" to verify a user's identity. In this case, in the message encrypted with the recipient's public key, the sender adds a signature, which will then be sent in an encrypted copy with his own private key. The recipient can then use the sender's public key to verify that the signature coincides with that contained in the message intended for him, thus confirming the sender's identity.

The second chapter of the story shifts the focus more properly to the "Man in the middle" attack. Mathina is kidnapped by a mysterious pirate, who succeeds in replacing her in communications with Leo and Angela. 


# Didactical remarks

"One-way functions" are the basis of several applications in modern cryptography, in particular for some key-exchange systems, such as Diffie-Hellman, and public key cryptography. Compared to the algorithm used in the real world, we opted for the use of a simplified version, in order not to introduce topics not covered in secondary school and to focus attention on the method. The mathematical skills needed to use this story include the properties of powers and the knowledge of division with remainder, which can be introduced or reviewed in the first years of upper secondary school. For a detailed study of the Diffie-Hellman algorithm, at least an introduction to the concepts of exponential and logarithm are required. 

&nbsp;

# About the apps

The interactive experiences encountered in the story are all variants of the Caesar cipher presented in the story “The Talking Parrot”. They are mainly used to deepen the mathematics underlying this cipher, observing for example that the coding and decoding operations are very reminiscent of addition and subtraction. The cipher is then modified and complicated by actually passing from the original Caesar cipher to a new cipher, much more secure, called the Vigenère cipher.

All apps are programmed in Javascript and can be used on computers, tablets and smartphones. Below is a brief description of the interactive experiences with links to the explanatory videos on Mathina's YouTube channel.

&nbsp;

## [Game 1 - The jewel I](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

In this app, the user must try to correctly encrypt some words using the Caesar cipher with a key chosen by the computer. This experience is used to familiarize the user with Caesar's cipher and, if the user has read the story "The Talking Parrot", to provide a reference to the concepts seen previously.
@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script1.pdf)

&nbsp;

## [Game 2 - The jewel II](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

The user has to decipher a message with Caesar's cipher but with an additional difficulty: the plaintext "Let's meet tomorrow morning at the bar near the pier on the island" is written backwards. This is a technical gimmick to make Caesar's cipher more complicated and is done for plot purposes.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script2.pdf)

&nbsp;

## [Game 3 - Sum on the clock](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

In this experience, the Caesar cipher presented earlier is analyzed mathematically. This time the interface is that of a clock with a single hand that aims to present addition in modular arithmetic. The initial question is like this: "Let's try to calculate 12 + 5 on a 14-hour clock". The user can move the hour hand on this watch to 14 hours to try to understand what the final answer will be (in this specific case 3 is the correct answer).

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [Game 4 - Caesar cipher repeated I](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

In this experience, messages are encoded and decoded using Caesar's cipher twice in succession. The coding method is exactly the same as the experiences of the story "The Talking Parrot". The only difference is that this time the operation is repeated twice.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script4.pdf)

&nbsp;
## [Game 5 - Caesar cipher repeated II](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

This experience concludes the analysis of history to observe that the Caesar cipher repeated 2 times in a row has nothing different from the usual Caesar cipher. Just change the key. To do this, the user is presented with two Caesar disks combined as in the previous experience and is asked to place a third Caesar disk so that the result of the encoding operation is the same.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script5.pdf)

&nbsp;

## [Game 6 - The jewel III](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

The experience is identical to the first, with the only difference that this time the message cannot be decoded, since it was not encrypted with Caesar's cipher. We emphasize that in the story this is said to the user first, so that the experience of this app is not frustrating. The idea is just check that in fact Caesar's disk does not decode the message presented in this case.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script6.pdf)

&nbsp;
## [Game 7 - The jewel IV](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

This experience is identical to the previous one, it is presented to the user only to focus on a particular letter of the text, making sure to translate it as an "E", thus experiencing exactly what Mathina and Angela are doing in the story.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script7.pdf)

&nbsp;
## [Game 8 - Word by word](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

This experience is a first step towards the Vigenère cipher. The text is encoded using two Caesar discs, one for even words and one for odd words. As it will be discovered in the story, this is not yet the right approach to actually decode the message and this experience aims to check, in person, that it is not the correct method.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script8.pdf)
## [Game 9 - A new cipher](https://hub.zabkar.net/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

The concluding experience of the story is the Vigenère cipher on two letters. Using two Caesar discs, the even and odd letters are changed respectively. In this way, following the suggestions of the story, you can easily decode the message. Then there is the possibility of repeating this experience with different messages and keys.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/bucca-3/transcripts/Script9.pdf)

&nbsp;
&nbsp;
