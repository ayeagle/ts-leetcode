// 680. Valid Palindrome II
// Easy
// 7.5K
// 381
// company
// Facebook
// company
// Yandex
// company
// Amazon
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.


function validPalindrome(s: string): boolean {
    const len = s.length
    if (len === 1 || len === 2) return true


    let left = 0
    let right = s.length - 1

    const checkSubP = (s: string, start: number, end: number) => {
        while (start < end) {
            if (s[start] != s[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }

    while (left < right) {
        if (s.charAt(left) === s.charAt(right)) {
            left++
            right--
        } else return checkSubP(s, left + 1, right) || checkSubP(s, left, right - 1)
    }
    return true
};