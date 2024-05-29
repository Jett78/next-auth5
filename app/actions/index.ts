"use server"
import { signIn } from "@/app/auth";


export async function doLogin(formData:FormData){
    const action = formData.get('action');
    await signIn(action,{redirectTo:"/home"})
}
