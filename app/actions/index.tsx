"use server"

export async function doSocialLogin(formData:FormData){
 const action = formData.get('action')
 console.log(action)
}


export async function doLogOut(){

}