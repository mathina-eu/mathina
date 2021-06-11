# Mathematical concepts
The purpose of this story is to underline, through the attack known as "Man in the middle", the importance of digital signature in cryptographic communication.
In the first chapter of the story, Angela explains to Mathina and Leo the Diffie-Hellman key exchange system, a cryptographic system that allows you to share secret information through unencrypted, and indeed publicly available, communications.
The method is based on the so-called "One-way function", i.e. invertible functions which are very easily computable in one direction, but extremely difficult to compute in the other.
In the story, reference is made, as an example, to the difference in difficulty perceived by Leo in primary school between multiplications and divisions, which although mathematically are one the inverse of the other, have different perceived difficulties by the students.
The Diffie-Hellman method actually uses the discrete logarithm, i.e. the calculation of the logarithm in modular arithmetic (for a hint of what modular arithmetic is, see [here]($HUB_URL/story/the-lost-treasure/), an operation that is extremely more complex from the point of view of computational difficulty than exponentiation.

Public key cryptography, on the other hand, involves an asymmetry in the use of keys. The first, the private one, will be kept secret by the user after generation; it will only serve to decrypt received messages. The other, the public one, can be made publicly available to anyone who wants to communicate with the user and is used only to encrypt the message (this implies, that if you encode a message with a public key of someone else, you will not be able to read it anymore, actually nobody will, except for the intended recipient)
This eliminates the need for the user to communicate a different secret key to each person who wants to communicate with him: this is particularly useful in the case of "many-to-one" communications, such as in the case of banking institutions or government agencies.

Public key cryptography can also be used "backward" to verify a user's identity. In this case, in the message encrypted with the recipient's public key, the sender adds a signature, which will then be sent in an encrypted copy with his own private key. The recipient can then use the sender's public key to verify that the signature coincides with that contained in the message intended for him, thus confirming the sender's identity.

The second chapter of the story shifts the focus more properly to the "Man in the middle" attack. Mathina is kidnapped by a mysterious pirate, who succeeds in replacing her in communications with Leo and Angela. 


# Didactical remarks

"One-way functions" are the basis of several applications in modern cryptography, in particular for some key-exchange systems, such as Diffie-Hellman, and public key cryptography. Compared to the algorithm used in the real world, we opted for the use of a simplified version, in order not to introduce topics not covered in secondary school and to focus attention on the method. The mathematical skills needed to use this story include the properties of powers and the knowledge of division with remainder, which can be introduced or reviewed in the first years of upper secondary school. For a detailed study of the Diffie-Hellman algorithm, at least an introduction to the concepts of exponential and logarithm are required. 

&nbsp;

# About the apps

There are three interactive experiences throughout the story, available at four different times. They are linked to key moments in the encryption and decryption process of the message and the choice of the key.

All apps are programmed in Javascript and can be used on computers, tablets and smartphones. Below is a brief description of the interactive experiences with links to the explanatory videos on Mathina's YouTube channel. 

&nbsp;

## [Game 1 - Key exchange I]($HUB_URL/story/the-man-in-the-middle/?actionLink=app1)

In the first experience, the reader retraces the steps that, after Angela's explanation, Mathina and Leo must carry out in order to derive the shared secret. Initially they choose a prime number p and then a random number chosen between 2 and p-2, then, through a simplified version of the algorithm, they separately come to the knowledge of a shared number, obtained from publicly exchanged information. 
@[youtube](LCwYk0WbgT8?_align-center_)
[Script](/stories/bucca-4/transcripts/Script4.pdf)

&nbsp;

## [Game 2 - Key exchange II]($HUB_URL/story/the-man-in-the-middle/?actionLink=app2)

The second app, building on the first, offers a practical use of the key exchange method. The reader in this case plays the role of Leo, who receives the first message from Mathina and decrypts it using the shared secret generated in the first app. This app is used twice within the story, in correspondence with the messages received by Leo from Mathina. 

@[youtube](OUW1rex3DJA?_align-center_)
[Script](/stories/bucca-4/transcripts/Script4.pdf)
&nbsp;

## [Game 3 - Key exchange III]($HUB_URL/story/the-man-in-the-middle/?actionLink=app3)

In the third experience, in the role of Leo, the reader must try to break the cryptographic system, trying to derive the shared secret starting from the knowledge of the portion of the key in possession of one of the users. The app is used to highlight the difference in computational difficulty between the operations to be carried out to obtain the shared secret and those necessary to attempt to violate the system. 
@[youtube](ylf8uX4wdpo?_align-center_)
[Script](/stories/bucca-4/transcripts/Script4.pdf)

&nbsp;

## [Game 4 - Stealing the key]($HUB_URL/story/the-man-in-the-middle/?actionLink=app4)

The fourth app re-proposes the experience of the second, with a new message; the reader again plays the role of Leo, who receives a new message from Mathina and again generates the message in clear text from the one received.
@[youtube](OUW1rex3DJA?_align-center_)
[Script](/stories/bucca-4/transcripts/Script4.pdf)

&nbsp;
