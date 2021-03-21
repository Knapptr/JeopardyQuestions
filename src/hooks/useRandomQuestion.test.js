import {stripHTMLFromAnswerResponse } from './useRandomQuestion'

test("Returns string if not between tags",()=>{
    expect(stripHTMLFromAnswerResponse("hello")).toBe('hello')
})

test("Returns only text between <i> tags",()=>{
    stripHTMLFromAnswerResponse("<i>Hello</i>")
    expect(stripHTMLFromAnswerResponse("<i>hello</i>")).toBe('hello')
})