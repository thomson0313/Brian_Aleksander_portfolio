import React from 'react';

import V_icon from '../../../assets/img/v.png'
import X_icon from '../../../assets/img/x.png'

const tableData = [
    {
        feature: "No Chance of Fire/Explosions",
        leadAcid: X_icon,
        liPo: X_icon,
        hybrid: V_icon,
    },
    {
        feature: " Depth of Discharge",
        leadAcid: "50%",
        liPo: "80%",
        hybrid: "100%",
    },
    {
        feature: "Discharge Cycles",
        leadAcid: "500 @ 80% DOD",
        liPo: "6,000 @ 80% DOD",
        hybrid: "50,000 @ 100% DOD",
    },
    {
        feature: "Temperature Sensitivity",
        leadAcid: "Degrades significantly above 25°C (77°F)",
        liPo: "degrades significantly above 25°C (77°F)",
        hybrid: "degrades slightly above 60°C (140°F)",
    },
    {
        feature: "Internal Resistance Effect",
        leadAcid: "Leads to the gradual reduction of  efficiency and power output over time.",
        liPo: "Leads to the gradual reduction of efficiency and power output over time.",
        hybrid: "Remains consistent throughout the lifecycle, maintaining efficiency.",
    },
    {
        feature: "Safety",
        leadAcid: "Prone to overheating, swelling, or explosion if overcharged, punctured, or exposed to high temperatures.",
        liPo: "Prone to overheating, swelling, or explosion if overcharged, punctured, or exposed to high temperatures.",
        hybrid: "No risk of thermal runaway, no dendrite formation, stable even under extreme conditions.",
    },
    {
        feature: "Longevity",
        leadAcid: "2-3 years shelf life, with performance degrading over time even if unused.",
        liPo: "5-6 year lifespan, with performance degrading over time even if unused.",
        hybrid: "20 - 30 year lifespan with minimal degradation.",
    },
    {
        feature: "Long-term Peak Shaving",
        leadAcid: X_icon,
        liPo: X_icon,
        hybrid: V_icon,
    },
];


const BatteryComparisonTable = () => {
    return (
        <div className='compare-table custom-scrollbar'>
            <table>
                <thead data-aos='flip-down'>
                    <tr>
                        <th>Features & Battery Types</th>
                        <th>Lead-Acid</th>
                        <th>LiPo/LiFePo</th>
                        <th>Our Hybrid Supercapacitor Battery</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index} data-aos='flip-down'>
                            <td className='table-bg'>{row.feature}</td>
                            {
                                (index === 0 || index === 7) ?
                                <>
                                    <td className='text-align'>
                                        <img src={row.leadAcid} alt='icon' />
                                    </td>
                                    <td className='text-align'>
                                        <img src={row.liPo} alt='icon' />
                                    </td>
                                    <td className='text-align'>
                                        <img src={row.hybrid} alt='icon' />
                                    </td>
                                </>:
                                <>
                                    <td className='text-align'>{row.leadAcid}</td>
                                    <td className='text-align'>{row.liPo}</td>
                                    <td className='text-align'>{row.hybrid}</td>
                                </>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BatteryComparisonTable;
