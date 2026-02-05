import React, { useEffect, useRef } from 'react';

interface LogsProps {
    logs: string[];
}

const Logs: React.FC<LogsProps> = ({ logs }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="side-area glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>NHẬT KÝ</h3>
            <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', fontSize: '0.9rem', padding: '0.5rem' }}>
                {logs.map((log, i) => (
                    <div key={i} style={{ marginBottom: '0.5rem', animation: 'fadeIn 0.3s' }}>
                        {log}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logs;
