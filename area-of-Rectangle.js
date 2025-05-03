function areaOfRectangle(width, length) {
    if (width <= 0 || length <= 0) {
        console.log("Wrong width or length");
        throw new Error("Length should be a positive number");
    } else {
        const area = width * length;
        console.log(`Area of reactangle with length ${length} and width ${width} is : ${area}`);
    }

}

areaOfRectangle(10, 30);
//areaOfRectangle(-10, 30);