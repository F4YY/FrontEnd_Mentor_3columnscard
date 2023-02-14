import React from 'react'
import { Buttoncard, CarIcon, Previewcard } from './styled/3columnscard.styled'

export const Card = ({
    icon,
    title,
    description,
    bgcolor,
    bordrads
}) => {
  return (
    <Previewcard
        $bgcolor={bgcolor}
        $desktoptopleft={bordrads.desktop.topleft}
        $desktoptopright={bordrads.desktop.topright}
        $desktopbottomright={bordrads.desktop.bottomright}
        $desktopbottomleft={bordrads.desktop.bottomleft}
        $mobiletopleft={bordrads.mobile.topleft}
        $mobiletopright={bordrads.mobile.topright}
        $mobilebottomright={bordrads.mobile.bottomright}
        $mobilebottomleft={bordrads.mobile.bottomleft}
        >
        <CarIcon src={icon} alt={icon}/>
        <h1>
            {title}
        </h1>
        <p>
            {description}
        </p>
        <Buttoncard $color = {bgcolor}>
            Learn More
        </Buttoncard>
    </Previewcard>
  )
}
