// @ts-ignore
//TYPESCRIPT TYPE +
// (required/optional simple and flexiblie syntax)
//Default VALUE
interface Employee {
    id: number;
    name: string;
    address?: Address;
}

interface HR extends Employee {
    communicationSkill: string;
}
interface Programmer extends Employee {
    computerSkill: string;
}

type ProgramManager = HR | Programmer

type Cat = { meows: true };
type Dog = { barks: true };
type Wolf = { barks: true; howls: true };
//Generic: incomplete Type
type ExtraDogish<D> = D extends { barks: true } ? D : never;
type NeverCat = ExtraDogish<Cat> //never
type Wolfish = ExtraDogish<Wolf> //wolf



type Address = {
    address1: string; //required
    state: string; //required
    zip: number; //required
    country?: string; //optional
    phNo?: string | null; //optional
}


function EmployeeMain() {
    const addr1 : Address = {
        address1: "2 32 alt street",
        state: "NSW",
        zip: 3456,
        phNo: null,
    }
    const emp1 : Employee = {
        id: 1,
        name: "Aman",
        address: addr1,
    };

    sum(12, 234);

    showAddress(addr1);

    const SUNDAY = Day.SUN;
    const MONDAY = Day.MON;
    //TS2367: This condition will always return 'false' since the types 'Day.SUN' and 'Day.MON' have no overlap
    // @ts-ignore
    if (SUNDAY === MONDAY) {

    }
    if(SUNDAY == "SUN") {

    }

    const emp2 : Employee = {
        id: 1,
        name: "Aman",
        address: undefined,
    };
    //emp2.address = null; null.country => NULLPointerException
    //System.out.println(emp2.address.country)
    /*if(emp2.address != null) {
        System.out.println(emp2.address.country)
    }*/
    console.log(emp2.address?.country) //similar to above if, ==  ,===

    const canadaVisa = undefined
    const australiaVisa = 'Australia Visa'
    const destination = canadaVisa ? canadaVisa : australiaVisa //if canadaVisa exist go to canada otherwise go to australia
    const destination2 = canadaVisa || australiaVisa //undefined, null , 0, false => FALSE
    const destination3 = canadaVisa ?? australiaVisa //undefined, null , 0, false => FALSE
    
    //canada visa exist ? 
    if(!!canadaVisa) { //!false of !false => true
        console.log(destination)
    }


    
}

/*int sum2(int no1, int no2) {
    return no1 + no2;
}*/
function sum(no1: number, no2: number = 0): number {
    return no1 + no2;
}

function showAddress(adr: Address) {

}

enum Day {
    SUN = "SUN",
    MON = "MON",
    TUE = "TUE",
    WEDN = "WEDN",
    THU = "THU",
    FRI = 'FRI',
    SAT = 'SAT'
}