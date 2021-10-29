import React from 'react'
import { Images } from './ImageVariable'

export default function GetImage() {
    return (
        <div>
            <img src={`/assets/imges/${Images}`} alt="" />
        </div>
    )
}
