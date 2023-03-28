import { makeAutoObservable, autorun } from "mobx"

export default class FormStore {
    person: any = {}
 
    constructor() {
        makeAutoObservable(this)
        autorun(()=>{
            console.log(Object.keys(this.person).length)
        })
    }

    updateProperty(name: string, value: string){
        this.person[name] = value
    }
}