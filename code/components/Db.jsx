
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'



export default function Db() {
    const ARTICLES = []
    
    const createArticle = () => {
        return {
            title: faker.hacker.phrase(),
            subtitle: faker.lorem.paragraph(),
            date: faker.date.past().toString()
        }
    }


    Array.from({ length: 10 }).forEach(() => {
        ARTICLES.push(createArticle())
    })


    return ARTICLES

}