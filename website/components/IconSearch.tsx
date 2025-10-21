import { SearchNormal1 } from 'iconsax-reactjs'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useDebounce } from '../hooks'
import { searchStore } from '../store'
import icons from '../lib/icons'

export const IconSearch = () => {
  const SetQuery = searchStore((state) => state.setQuery)
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])
  useDebounce(() => SetQuery(search), 300, [search])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = document.activeElement?.tagName
      const isInputFocused = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'

      if (e.key === '/' && !isInputFocused) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
   <div className="relative w-max">
      <div className="h-10 bg-card rounded-xl flex items-center px-3 pr-10">
        <SearchNormal1 size="18" color="#eee" variant="TwoTone" />
        <input
          ref={inputRef}
          className="bg-transparent px-2 py-2 w-28 sm:w-48 outline-none text-white placeholder:text-gray-400"
          value={search}
          onChange={onChangeInput}
          placeholder={`Search ${icons.length} icons...`}
          type="text"
        />
      </div>
      {/* kbd shortcut indicator */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <kbd className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-lg border border-gray-600 font-mono">
          /
        </kbd>
      </div>
    </div>
  )
}
