const students = [
    { id: 'SD-001', name: 'Alice Uwase', trade: 'Software Development' },
    { id: 'SD-002', name: 'Brian Mugisha', trade: 'Software Development' },
    { id: 'SD-003', name: 'Claudine Mukamana', trade: 'Software Development' },
    { id: 'SD-004', name: 'David Nkurunziza', trade: 'Software Development' },
    { id: 'SD-005', name: 'Eric Habimana', trade: 'Software Development' },
    { id: 'SD-006', name: 'Fiona Uwimana', trade: 'Software Development' },
];

function Students({ goHome }) {
    return (
        <section>
            <h2>Our Students</h2>
            <p>Below is the list of students in the Software Development class:</p>

            <table border="1" cellPadding="6" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.trade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>Total students: {students.length}</p>
            <button onClick={goHome}>Back to Home</button>
        </section>
    );
}

export default Students;