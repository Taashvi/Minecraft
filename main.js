var canvas=new fabric.Canvas('myCanvas');
var player_X=10;
var player_Y=50;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(player_object);
});

}

function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_object.scaleToWidth(block_width);
    block_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_object);
});
}

window.addEventListener("keydown", key_pressed);

function key_pressed(e){
    var key_name=e.keyCode;
    console.log(key_name);

    if (e.shiftKey == true && key_name == '80'){
        console.log("Shift and P have been pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (e.shiftKey == true && key_name == '77'){
        console.log("Shift and M have been pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (key_name == '38'){
        Up();
        console.log("Up");
    }

    if (key_name == '40'){
        Down();
        console.log("Down");
    }
    
    if (key_name == '39'){
        Right();
        console.log("Right");
    }

    if (key_name == '37'){
        Left();
        console.log("Left");
    }

//Blocks
    if (key_name == '84'){
        new_image('trunk.jpg');
        console.log("Trunk");
    }

    if (key_name == '68'){
        new_image('dark_green.png');
        console.log("dark_green");
    }

    if (key_name == '76'){
        new_image('light_green.png');
        console.log("light_green");
    }

    if (key_name == '71'){
        new_image('ground.png');
        console.log("ground");
    }
    
    if (key_name == '87'){
        new_image('wall.jpg');
        console.log("Wall");
    }

    if (key_name == '89'){
        new_image('yellow_wall.png');
        console.log("yellow_wall");
    }

    if (key_name == '82'){
        new_image('roof.jpg');
        console.log("roof");
    }
    
    if (key_name == '67'){
        new_image('cloud.jpg');
        console.log("cloud");
    }

    if (key_name == '85'){
        new_image('unique.png');
        console.log("unique");
    }
}

function Up(){
    if (player_Y>0){
        player_Y=player_Y-block_width;
        canvas.remove(player_object);
        player_update();
        console.log("Up Key Pressed  X = "+player_X+" Y = "+player_Y);
    }
}

function Down(){
    if (player_Y<470){
        player_Y=player_Y+block_width;
        canvas.remove(player_object);
        player_update();
        console.log("Down Key Pressed  X = "+player_X+" Y = "+player_Y);
    }
}

function Right(){
    if (player_X<750){
        player_X=player_X+block_width;
        canvas.remove(player_object);
        player_update();
        console.log("Right Key Pressed  X = "+player_X+" Y = "+player_Y);
    }
}

function Left(){
    if (player_X>0){
        player_X=player_X-block_width;
        canvas.remove(player_object);
        player_update();
        console.log("Left Key Pressed  X = "+player_X+" Y = "+player_Y);
    }
}
