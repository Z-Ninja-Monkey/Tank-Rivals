function BuildLevel(array1, array2, array3, topLeft){

    let array1Control = 200;
    let array2Control = 200;
    let array3Control = 200;
    let topLeft1 = topLeft;
    let topLeft2 = topLeft + 60;
    let topLeft3 = topLeft + 120;
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] == 0){
            thing1 = new barriers.Sprite(array1Control,topLeft1, 60, 60, 'k');
            thing2 = new barrierCollider.Sprite(array1Control, 100, 60, 60, 'd');
            thing2.overlaps(thing1);
        }else if(array1[i] == 1){
            thing1 = new wood.Sprite(array1Control, topLeft1, 60, 60, 'k');
            thing2 = new woodCollider.Sprite(array1Control, 100, 60, 60, 'd');
            thing2.overlaps(thing1);
        }

        array1Control += 60;
    }

    for (let i = 0; i < array2.length; i++) {
        if(array2[i] == 0){
            thing1 = new barriers.Sprite(array2Control, topLeft2, 60, 60, 'k');
            thing2 = new barrierCollider.Sprite(array2Control, topLeft2, 60, 60, 'd');
            thing2.overlaps(thing1);
        }else if(array2[i] == 1){
            thing1 = new wood.Sprite(array2Control, topLeft2, 60, 60, 'k');
            thing2 = new woodCollider.Sprite(array2Control, topLeft2, 60, 60, 'd');
            thing2.overlaps(thing1);
        }

        array2Control += 60;
    }

    for (let i = 0; i < array3.length; i++) {
        if(array3[i] == 0){
            thing1 = new barriers.Sprite(array3Control, topLeft3, 60, 60, 'k');
            thing2 = new barrierCollider.Sprite(array3Control, topLeft3, 60, 60, 'd');
            thing2.overlaps(thing1);
        }else if(array3[i] == 1){
            thing1 = new wood.Sprite(array3Control, topLeft3, 60, 60, 'k');
            thing2 = new woodCollider.Sprite(array3Control, topLeft3, 60, 60, 'd');
            thing2.overlaps(thing1);
        }

        array3Control += 60;
    }

}