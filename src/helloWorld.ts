import { delay } from "./lib/common"

export async function helloWorld() {
    console.log("Before delay!")
    await delay(500)
    console.log("After delay\nHello World Async!")
}