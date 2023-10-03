import React, {useEffect, useState} from 'react'
import { FaHeadphones, FaRegCheckm, FaRegHeart, FaHeart } from 'react-icons/fa'
import MusicPlayer from './MusicPlayer'
import { list } from './songList'
import '../../styles/LeftMenu.css'
import localImg from '../../Images/song-img.jpg'

function AudioList() {

    const [songs, setSongs ] = useState(list)
    const [song, setSong] = useState(null)
    const [img, setImage] = useState(null)
    const [auto, setAuto] = useState(false)

    useEffect(() => {
        const allSongs = document.querySelectorAll(".songs")

        function changeActive() {
            allSongs.forEach((n) => n.classList.remove("active"))
            this.classList.add("active")
        }

        allSongs.forEach((n) => n.addEventListener("click", changeActive))
    }, [])

    const changeFavorite = (id) => {
        songs.forEach((song) => {
            if (song.id === id) {
                song.favorite = !song.favorite
            }
        })

        setSongs([...songs])
    }

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc)
        setImage(imgSrc)
        setAuto(true)
    }

    return(
        <div>

        </div>
    )
}

export {AudioList}