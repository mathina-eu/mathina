# Mathematical concepts
This story introduces the description of curves by implicit functions. We have seen in previous stories (phoenix race) the explicit description of a curve, where for each `@x@` value, we obtain a `@y@` value by a function, `@y=f(x)@`, and we represent all the points `@ (x,y) = (x,f(x)) @`.

With the implicit description, in contrast, we have a two-variable function `@F(x,y)@` that for any two input values of `@x@` and `@y@`, it returns a number. We represent our curve as all the points `@(x,y)@` that satisfy `@F(x,y)=0@`.

With the explicit description we used in previous stories, we had a constructive method for obtaining all the points in the curve: we just feeded in values of x and we obtain points on the curve. On the other hand, with the implicit description, we have just a test method to decide whether a point belongs to the curve or not. This makes the implicit method more appropriate for describing relationships than to describe construction methods.

Take for instance the circle of radius `@r=2@` and centered at the origin `@(0,0)@`. The geometrical description states that a circle is the set of all points at distance `@2@` from the center.

![Some alt text](/stories/fire-4/img/_align-center_circtrig.png =300x300)

Using the Pythagorean theorem, this translates into coordinates as the equation

```AsciiMath
 x^2+y^2=r^2=4
 ```

Or to write it as a single implicit function,
```AsciiMath
F(x,y)=x^2+y^2-4=0.
```
If we want to convert that expression into an explicit one, we can isolate the y as an expression of x, as
```AsciiMath
y=pm sqrt {4-x^2}.
```
Observe that we could not write y as a single function of x, these are two functions depending on the choice of the sign for the square root. The symmetry of the circle is somehow broken because we privilege x as the input variable, and the function does not admit values of x outside the domain `@[-2,2]@`.
There is a third way of describing the curve in a constructive way: instead of writing `@y@` as an expression depending on `@x@`, we can write both `@x@` and `@y@` as a function of an independent variable, which we can understand as time or as a parameter. In the case of the circle, the most appropriate choice is the angle between the radius and the x-axis. Then, using trigonometric functions, we can describe the circle in parametric form as
```AsciiMath
x= cos(theta)

y= sin(theta)
```

For each value of `@theta@`, we obtain a point `@(x,y)@` in the plane.


Lines and circles are some easy examples to try with implicit functions. Additionally, some tricks and techniques can be used to generate more shapes:

* Deformation: Given a curve defined by `@F(x,y)=0@`, we can obtain a small deformation by changing the equation to `@F(x,y)=a@`, or equivalently `@F(x,y)-a=0@`, if the value of a is small (close to zero). Since the function `@F@` is continuous, the points that make `@F(x,y)=a@` will be close to the points that make `@F(x,y)=0@`. We obtain thus a deformation of the curve.

Given two curves defined by `@F(x,y)=0@` and `@G(x,y)=0@`, we can obtain the curve that contains all the points of both (union), or the set of points that belong to both curves at the same time (intersection).

* Union: We can obtain that curve multiplying `@F(x,y)*G(x,y)=0@`. Indeed, if the product `@F*G=0@`, then either `@F=0@`, or `@G=0@` (or both), and thus all the points that make `@F=0@` are part of the new curve, and all the points that make `@G=0@` also are.

* Intersection: We can obtain these points by using the expression `@F(x,y)^2 + G(x,y)^2=0@`. Indeed, if the sum of two positive quantities is zero, then both must be zero at the same time, and hence only the points that make simultaneously `@F=0@` and `@G=0@` will belong to the new curve. In general, this construction will generate isolated points (by intersecting two curves), but we can re-obtain a curve by applying the deformation technique introduced earlier, that is, `@F(x,y)^2 + G(x,y)^2 -a =0@` for some value of `@a@` close to zero.

On the last activity, we explore implicit surfaces in three-dimensional space. These are given by the zeroset of a three-valued function `@F(x,y,z)=0@`.


# Didactical remarks
The apps are proposed here mainly as an explorative exercise. Numerous examples are provided as both a display of the complexity that can be achieved, as well as simple examples that can be familiar (like lines, circles, ellipses, hyperbolas, etc).

Some examples can be analysed to get an understanding of the geometric shape from the algebraic expression, as we did above with the circle, using the Pythagorean theorem. Guessing and trying to develop an intuition on the formulas is the main challenge for this story. An exercise of matching equations with curves is proposed.

The tools provided by the app, together with the techniques pointed above, are powerful enough and allow great creativity, that should be exploited: Challenge the student to make a shape that resembles a star, a hexagon, a sea animal, a plant, etc.

The app has an extensive list of examples of curves, each one shows its formula and the drawing. First examples can be understood and deducted after some reflection. A text box allows one to introduce and modify any (polynomial) equation in two variables.


# About the apps
