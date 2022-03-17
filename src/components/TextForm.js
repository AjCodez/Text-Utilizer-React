import React from 'react'

export default function TextForm() {
    return (
        <div class="mb-3">
            <label for="myTextBox" class="form-label">Text Area</label>
            <textarea class="form-control" id="myTextBox" rows="3"></textarea>
        </div>
    )
}
