# Equations to scale one parameter based on the value of another

<a name="linear_calcEqn">`scalingFunction.linear.calcEqn(x1,x2,y1,y2)`</a> 
takes two points (first x then second x, then first y then second y) and returns an object containing the the slope and intercept in the format of 
```js
{m: slope, b: intercept}
```

<a name="linear_calcPt">`scalingFunction.linear.calcPt(x,m,b)`</a> 
takes x val of a point, the slope of a linear relationship and the intercept of the linear relationship and returns a y valule

## Status
This only calculates linear relationships for now. 

Future work will involved adding additional patterns to the library. 
