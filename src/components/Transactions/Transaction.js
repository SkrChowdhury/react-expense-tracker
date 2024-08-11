import React from 'react'
import deleteImage from "../../assets/images/delete.svg"
import editImage from "../../assets/images/edit.svg"

export default function Transaction() {
  return (
    <li class="transaction income">
    <p>Earned this month</p>
    <div class="right">
        <p>৳ 100</p>
        <button class="link">
            <img
            alt='Edit'
                class="icon"
                src={editImage}
            />
        </button>
        <button class="link">
            <img
                 alt='Delete'
                class="icon"
                src={deleteImage}
            />
        </button>
    </div>
</li>
  )
}
