"use server"
import { signIn } from "@/app/auth"

export async function doSocialLogin(formData:FormData){
 const action = formData.get('action')
 await signIn(action,{redirectTo:"/home"})
 console.log(action)
}


export async function doLogOut(){

}