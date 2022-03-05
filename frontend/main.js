//IEFE


function fun1() {
    //var, let, const
    let letX = 40;
    letX = 50;//can change value

    const constY = 100; //primitive
//constY = 110; //ERROR: can't change value

//final Coordinate coord = new Coordinate(30.55, 65.66);
    const coordinate = { //Object, declare
        long: 30.55,
        lat: 65.66
    };
    /*coordinate = { //ERROR : CAN'T REPLACE Object Reference
        long: 90.55,
        lat: 95.66
    }*/
    coordinate.long = 40.66; //NO ERROR: can update value of the reference object

}

function sum() {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value
    // var input1 = $("input1").val
    //safe programming
    //check if string is empty, show error if empty
    if(!input1.length) { //NO-VALUE //input1.length != 0 ,0 true undefined null
        document.getElementById("error")
            .innerHTML="Please Input number for 1st input!";
        return;
    }
    if(!input2.length) { //NO-VALUE //input1.length != 0 ,0 true undefined null
        document.getElementById("error")
            .innerHTML="Please Input number for 2nd input!";
        return;
    }
    //error free
    document.getElementById("error").innerHTML="";
    var no1 = parseInt(input1);
    var no2 = parseInt(input2);

    var sum = no1 + no2
    document.getElementById("result").value = sum;
}

function changeDivColour() { //DOM Manipulation
    console.log(1, 'changeDivColour called...');
    document.getElementById("colorDiv").style.color = 'pink';
    document.getElementById("colorDiv").style.fontSize = 'medium';
}

//call service API, which can take 1 min or 10 sec to return data
//Asysnchronus new style

function init() {

    setTimeout(function (){
        const resutl = { //10 sec, data: JSON
            firstName: 'Ram',
            lastName: 'Shrestha',
            address: {
                state: 'NSW',
                street: '5 / 333 Alt St'
            }
        }
        console.log(1, 'Result is: ', resutl)
        //alert(JSON.stringify(resutl))
    }) //what without time?

    setInterval(function () {
        console.log(12, 'Internal of 5 sec')
    }, 5000) //loop

    const constS = "{\"firstName\":\"Ram\",\"lastName\":\"Shrestha\",\"address\":{\"state\":\"NSW\",\"street\":\"5 / 333 Alt St\"}}";
    const contactStr = '{"firstName":"Ram","lastName":"Shrestha","address":{"state":"NSW","street":"5 / 333 Alt St"}}'
//you can define variable inside ``
    const consStr = `
            {"firstName":"Ram","lastName":"Shrestha","address":{"state":"NSW","street":"5 / 333 Alt St"}}
        `;
    console.log(21, 'contactStr: ', contactStr)

//Convert String to object
    const contactStrToJson = JSON.parse(contactStr)
    console.log(21, 'contactStr: JSON Object: ', contactStrToJson)
    console.log(21, 'contactStr: JSON Object: FirstNmae ', contactStrToJson.firstName)

    const x = 10, y = 30;
    const sumxy = x + y;
    console.log('Summ is: ', sumxy)


    const props = {
        getThisYear : function (){
            const thisYear = new Date().getFullYear();
            return thisYear;
        }

    }
    console.log('Happy New Year: ', props.getThisYear())
}

//This is not good
// init() //it can triigger js before documen is ready(img, css apply)
//If jquery: use ready function
$(document).ready(function (){
    init();
});

