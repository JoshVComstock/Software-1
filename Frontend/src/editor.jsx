import React from 'react'
import Editor from '@monaco-editor/react'
import { useState } from 'react'


const Edito = () => {
    const [contentMardow,setContentMardow]=useState('');
  return (
    <div>
        <Editor
        height='50vh'
        theme='vs-dark'
        defaultLanguage='csharp'
        value='using System;

            public class HelloWorld
            {
                public static void Main(string[] args)
                {
                    
                }
            }}'
        />

    </div>
  )
}
export default Edito