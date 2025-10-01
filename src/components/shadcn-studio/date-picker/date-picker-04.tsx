'use client'

import { useState } from 'react'
import { format, parse, isValid } from 'date-fns'

import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

function formatDate(date: Date | undefined) {
  if (!date) {
    return ''
  }

  return format(date, 'yyyy-MM-dd')
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }

  return isValid(date)
}

const DatePickerWithinInput = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [month, setMonth] = useState<Date | undefined>(date)
  const [value, setValue] = useState(formatDate(date))

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor='date' className='px-1'>
        Date picker within input
      </Label>
      <div className='relative flex gap-2'>
        <Input
          id='date'
          type='date'
          value={value}
          placeholder='2025-01-01'
          className='bg-background pr-10 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
          onChange={e => {
            setValue(e.target.value)

            // Try to parse the date in YYYY-MM-DD format (HTML date input format)
            const parsedDate = parse(e.target.value, 'yyyy-MM-dd', new Date())

            if (isValidDate(parsedDate)) {
              setDate(parsedDate)
              setMonth(parsedDate)
            }
          }}
          onKeyDown={e => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button id='date-picker' variant='ghost' className='absolute top-1/2 right-2 size-6 -translate-y-1/2'>
              <CalendarIcon className='size-3.5' />
              <span className='sr-only'>Pick a date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto overflow-hidden p-0' align='end' alignOffset={-8} sideOffset={10}>
            <Calendar
              mode='single'
              selected={date}
              month={month}
              onMonthChange={setMonth}
              onSelect={date => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default DatePickerWithinInput
