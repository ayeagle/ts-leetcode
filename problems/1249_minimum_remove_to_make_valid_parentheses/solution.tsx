function minRemoveToMakeValid(s: string): string {

    const indexStack: number[] = []

    const strArr = s.split("")

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '(') {
            indexStack.push(i)
        } else if (strArr[i] === ')') {
            if (indexStack.length > 0) {
                indexStack.pop()
            } else {
                strArr[i] = ''
            }
        }
    }

    while (indexStack.length > 0) {
        strArr[indexStack.pop() ?? 0] = ''
    }

    return strArr.join('')
}