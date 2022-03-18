//What we are doing? what is typescript , why to use it, how to use it?

/*enum Day {
    SUN,MON,TUES,WEDN,THU,FRI,SAT
}*/

/*//First of all lets learn javascript
class Employee {
    @NotNull
    private int id; //required?
    private String name = null; //required?
    private Address address //required?
    public Employee(@NotNull int id, @NotNull String name, Address address) {
        Objects.requiredNotNull(name);
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

class HR extends Employee {
    private String communicationSkill;
}

class Programmer extends Employee {
    private String computerSkill;
}

class Address {
    private String address1;
    private String state;
    private int zip;
    private String country;
    private String phNo;
}

public static main(String[] args)  {
    Address add1 = new Address("2 32 alt steet", "NSW", "2456", "Aus", "23423234");
    Employee emp = new Employee(2, null, add1); //name? required?

    int id = 2;
    double d = 9.8;
    //TYPE primitive: int, String, double , boolean
    //Type wrapper ( class): Double
    //TYPE class: class name is also a data type
}*/

//===========JS WORLD ========
function main() {
    // int id = 2;
    var id1 = 2; //int
    var id2 = "2"; //String
    var id3 = 9.8; //double
    var id4 = true; //boolean
    //NO TYPES like int, boolean, double String in JS
    //ES5: JS have only one var
    //ES6: let , const
    let name = "Amit";
    let name2 = true;
    let name3 = 9.8;
    //JAVA: public static final String add1 = "Canberra";
    const add1 = "Canberra";
    // add1 = "NSw";

    //JS Object => JSON
    const employess = [
        {
            id : 1,
            name: 'Aman',
            address: {
                address1: "Unit 2, 34 X St",
                state: "NSW",
                country: true, //MISTAKE? HOw to prevent it? TypeScript
            }
        },
        {
            id : 2,
            name: 'Santosh',
            address: {
                address1: "Unit 7, 34 X St",
                state: "Canberra"
            }
        }
    ]

    //What IS Typescript:
    //SuperSet compiler + JS + Type
    //Type issue resolve


}

