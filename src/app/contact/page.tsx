'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import contact from '../../assets/contact.jpg'

export default function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    // Construir o corpo do e-mail
    const body = {
      name,
      email,
      message,
    }

    // Enviar o e-mail
    fetch('https://localhost:3333/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(() => {
        // E-mail enviado com sucesso
        alert('E-mail enviado com sucesso!')
      })
      .catch((error) => {
        // Ocorreu um erro ao enviar o e-mail
        console.error('Erro ao enviar o e-mail:', error)
        alert(
          'Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.',
        )
      })

    // Limpar os campos do formulário
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="mt-10 flex w-screen grid-cols-1 flex-col items-center justify-center py-4 sm:h-screen sm:flex-row sm:justify-evenly">
      <div className=" h-96 w-96">
        <Image src={contact} alt="Contato" />
      </div>
      <div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="block w-80 text-start sm:w-96">
            <label htmlFor="name">Nome:</label>
            <input
              className="flex w-80 sm:w-96"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 block w-80 text-start sm:w-96">
            <label htmlFor="email">E-mail:</label>
            <input
              className="flex w-80 sm:w-96"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 block w-80 text-start sm:w-96">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              className="flex h-60 w-80 resize-none overflow-y-auto sm:w-96"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            className="mt-4 h-10 w-80 rounded-lg bg-blue-300 text-white sm:w-96"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
