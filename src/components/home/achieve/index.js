import React from "react";
import './styles.achieve.css'

export default function Achieve() {
    const statsData = [
        { value: "78+", label: "Clients", icon: "📦" },
        { value: "5", label: "Degrees", icon: "🎓" },
        { value: "32526+", label: "Hours Of Support", icon: "⏰" },
        { value: "57+", label: "Recommends", icon: "👍" },
    ];

    return (
        <div className="achieve">
            <div className="achieve-title" data-aos='fade-down'>Achievements</div>
            <div className="achieve-card-container">
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className="achieve-card-body"
                    >
                        <div
                            style={{
                                backgroundColor: "#4a90e2", // Icon background
                                color: "#fff",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "10px",
                                fontSize: "18px",
                            }}
                        >
                            {stat.icon}
                        </div>
                        <h2 style={{ margin: 0, fontSize: "24px", color: "#000" }}>
                            {stat.value}
                        </h2>
                        <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
