import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
export class employeedatabyapi implements InMemoryDbService {
    createDb() {
        return {
            employee: [
                {code:1, firstname: "ashutosh", middlename: "gg", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:2, firstname: "ashu", middlename: "gg", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:3, firstname: "ashutosh", middlename: "gg", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:4, firstname: "ashutosh", middlename: "", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:5, firstname: "ashu", middlename: "", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:6, firstname: "ashutosh", middlename: "gg", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:7, firstname: "ashutosh", middlename: "gg", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:8, firstname: "ashutosh", middlename: "gg", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" },
                {code:9, firstname: "ashutosh", middlename: "", lastname: "tiwari",email:"abd@abc", contactnumber:"1234567890", pincode: 111111, gender: "male",employeetype:"permanent", btnview: "View", btnedit: "Edit" }
            ]
        };
    }


}