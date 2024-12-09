'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function BookingForm() {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', booking)
    alert('Booking submitted successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value: string) => {
    setBooking({ ...booking, service: value })
  }

  return (
    <section id="booking" className="py-16">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <Label className='text-gray-300' htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required onChange={handleChange} />
          </div>
          <div>
            <Label className='text-gray-300' htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div>
            <Label className='text-gray-300' htmlFor="date">Date</Label>
            <Input type="date" id="date" name="date" required onChange={handleChange} />
          </div>
          <div>
            <Label className='text-gray-300' htmlFor="time">Time</Label>
            <Input type="time" id="time" name="time" required onChange={handleChange} />
          </div>
          <div>
            <Label className='text-gray-300' htmlFor="service">Service</Label>
            <Select onValueChange={handleServiceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent className='text-black'>
                <SelectItem value="classic-haircut">Classic Haircut</SelectItem>
                <SelectItem value="beard-trim">Beard Trim</SelectItem>
                <SelectItem value="hot-towel-shave">Hot Towel Shave</SelectItem>
                <SelectItem value="hair-beard-combo">Hair & Beard Combo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-stone-700 text-white">Book Now</Button>
        </form>
      </div>
    </section>
  )
}

