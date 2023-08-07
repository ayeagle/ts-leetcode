function calculate(s: string): number {

    const evalExp = (num: number, sign: string) => {
        switch (sign) {
            case '+': {
                itemsArray.push(num)
                break
            }
            case '-': {
                itemsArray.push(-num)
                break
            }
            case '*': {
                itemsArray.push((itemsArray.pop() ?? 1) * num)
                break
            }
            case '/': {
                const temp = itemsArray.pop()! / num
                itemsArray.push(temp > 0 ? Math.floor(temp) : Math.ceil(temp))
                break
            }
        }

    }

    let temp: string = ''
    let itemsArray: Array<number> = []
    let sign = '+'
    const newS = s.trim()
    
    for (let i = 0; i < newS.length; i++) {
        if (!isNaN(+newS.charAt(i))) {
            temp += newS.charAt(i)
        } else {
            evalExp(+temp, sign)
            sign = newS.charAt(i)
            temp = ''
        }
    }

    evalExp(+temp, sign)

    return itemsArray.reduce((a, b) => {
        return a + b
    })

};