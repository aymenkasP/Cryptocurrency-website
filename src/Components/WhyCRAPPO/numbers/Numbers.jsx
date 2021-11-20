import React from 'react'
import Info from '../info/Info'
import f1 from "../svg/i1.svg"
import f2 from "../svg/i2.svg"
import f3 from "../svg/f3.svg"
export default function Numbers() {
    return (
        <div className="flex-between container-why">
            <Info icon={f1} number={"$30B"} description="Digital Currency Exchanged" />
            <Info icon={f2} number={"$10M"} description="Trusted Wallets Investor" />
            <Info icon={f3} number={"195"} description="Countries Supported" />
        </div>
    )
}
