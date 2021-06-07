# Mathematical concepts
Functions are transformations that take an input number `@x@` and give out an output value `@y=f(x)@`. We can make a graph of the function, by plotting the points `@(x, f(x))@` in cartesian coordinates, yielding a curve in the plane. Some important examples of such curves are polynomial curves, which include straight lines (first degree) and parabolas (second degree).

Those polynomials can be defined by their coefficients. An interesting quest is to find the (only) polynomial of degree n that passes through (n+1) selected points. One of the methods to find the requested polynomial is called the Lagrange polynomial interpolation, and it is an algebraic manipulation exercise.

The polynomial curves can also be traced with their velocity vector. This vector is calculated from the derivative of the function that defines the curve. The derivative of a function describes the rate of change of the function, and thus, whether the function is increasing or decreasing when advancing in the variable.

If we prescribe the derivative of the function (indicating the moments when the function should increase or decrease and how much), and we fix the value of the function at one starting point (for example the origin), we can reconstruct the original function.



# Didactical remarks
Students at this age are able to use symbolic expressions (functions and equations). This story exploits that to describe curves, and get exposed to the ideas of growth rate and derivative. App 3 can be especially recommended to introduce the derivative for the first time, providing an intuitive understanding of the matter. However, we also recommend to use the story and its apps with older pupils who are already familiar with derivatives, to consolidate the acquired knowledge (especially App 4). Stories and apps are more open-ended, giving more options to explore.

# About the Apps

## App 1 - Adjust the parameters and fly the Phoenix

Upon opening the app, you will see a coordinate system, a yellow graph and a purple one. The yellow one is the desired flight path of the phoenix, the goal to achieve. The purple curve is a polynomial function of the variable x. It can be adjusted with the control panel. For each power of x, you can change the corresponding coefficient of the polynomial.

![App1](/stories/fire-3/img/_align-center_/app1.png)

The degree of the polynomial - the highest value of the exponents of x - will increase as you progress (the maximum is `@x^3@`). Each coefficient can be changed with the + and - buttons, where each click will change it by +/- 0.1. You can also hold down to create a constant increase of the value. Once the correct flight path is entered, the phoenix will automatically fly along it. Afterwards, a new flight path challenge is offered for the user. You may use the previous function, which will still be displayed, or use the 'Delete' button, to set all coefficients to zero, and start fresh.

## App 2 - Adjust the points and fly the Phoenix

The goal of this app is also to create a flight path for the phoenix, which is again described by a polynomial. You need to find a path for the phoenix to arrive at the right side without hitting any obstacles (mountains and clouds). This time, however, you cannot adjust the coefficients directly, but you can move six (yellow) points on the coordinate plane. Together with the origin, which is the starting position of the phoenix, these seven points describe a unique polynomial of degree 6 (highest power of x). This polynomial - the created flight path - will go through all of the yellow points. The curve will only be visible after you tell the phoenix to fly.

![App2_1](/stories/fire-3/img/2_1.png)
![App2_2](/stories/fire-3/img/2_2.png)

If the phoenix did not succeed, he will jump back to the origin, leaving the flight path of the last attempt visible. You may now change the curve by moving the points again. For some challenges, you might need several trials, finetuning the flight path with every attempt. If the flight was successful, a new challenge will be offered, with more obstacles to avoid.

![App2_3](/stories/fire-3/img/_align-center_/2_3.png)

## App 3 - Guide the Phoenix through the Derivative

To fly this phoenix, you tell how much it should ascend or descend by moving the hand on the left up or down. The goal is to arrive at the right side avoiding all obstacles (mountains and clouds). The flight path will be horizontal if the hand is positioned at zero, the phoenix will rise/descend if the hand is above/below zero. The phoenix will only move while the hand is actively dragged, otherwise it will stop in midair (similar to the apps of the story 'The Firebird Trainer').

![App3](/stories/fire-3/img/_align-center_/3.png)

After the phoenix arrives at the right side, it returns to your hand and new obstacles appear (a maximum number of three mountains and three cloud clusters).

## App 4 - Adjust the points of the derivative and fly the Phoenix

This app combines the methods introduced in the two previous apps. As in App 2, you manipulate points to adjust a curve passing through them. However, this time it tells the amount of ascend or descend of the phoenix at each time - it is the derivative of the flight path (introduced in App 3). Try to collect all fireballs in your way.

![App4](/stories/fire-3/img/_align-center_/4_1.png)

Once you have adjusted the white points, you can click the 'Go' button to let the phoenix fly. During the flight, a yellow arrow indicates the direction and speed of the phoenix at its current position (similar to the magic wand control for the unidragon in the apps of the story 'The Firebird Trainer'). Purple arrows indicate the value of the derivative at the current position. There is one purple arrow displayed at the phoenix and (the same) one at the curve. 

![App4](/stories/fire-3/img/_align-center_/4_2.png)

The phoenix may fly outside the screen, but will always arrive at the right side eventually. If it takes too long, you can click the 'Back' button (in this case, the flight was not successful). After a flight, in which the phoenix did not collect all fireballs, his flight path stays visible in order to help you adjust it. Observe the correspondance between the yellow (flight path) and the purple curve (derivative of the flight path). 

![App4](/stories/fire-3/img/_align-center_/4_3.png)

Hints:
* You may also move the very first white dot, which is initially positioned at the origin.
* If you want the flight path to have a maximum or minimum where a fireball is reached, put a white dot to the x-axis.
* If a fireball is positioned at the x-axis, the area between the purple curve and the x-axis above and below the axis must be equal (from the origin to the fireball). 
* If the areas above and below the x-axis are very different, the phonenix will end up far away from the x-axis.



