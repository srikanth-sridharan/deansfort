"use client"
import React from 'react'
import Avatarimage from "@/public/images/whatsapp/indianavatar.jpg";

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {

  return (

      <FloatingWhatsApp  phoneNumber="+919942007771"
      accountName="Customer Support"
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hello! How can we help you?"
      avatar={Avatarimage.src}
      notification={true}
      notificationDelay={60}
      className="floating-whatsapp"/>
                       
  )
}
