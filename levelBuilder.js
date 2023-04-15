function BuildLevel(array1, array2, array3){

    array1Control = 200;
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] == 0){
            thing1 = new barriers.Sprite(array1Control,100, 60, 60, 'k');
            thing2 = new barrierCollider.Sprite(array1Control, 100, 60, 60, 'd');
            thing2.overlaps(thing1);
           /* thing2.update = () => {
                thing2.x = thing1.x;
                thing2.y = thing1.y;
             }*/
        }else if(array1[i] == 0){
            thing1 = new wood.Sprite(array1Control, 100, 60, 60, 'k');
            thing2 = new woodCollider.Sprite(array1Control, 100, 60, 60, 'd');
            thing2.overlaps(thing1);
           /* thing2.update = () => {
                thing2.x = thing1.x;
                thing2.y = thing1.y;
            }*/
        }

        array1Control += 60;
    }


}