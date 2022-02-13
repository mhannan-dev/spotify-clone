let id = 0;
const createData = (title, album, date_added, duration) => {
    id += 1;
    return { id, title, album, date_added, duration };
};

export default [
    createData(
        "Track One Title",
        "album one",
        "13-02-2022",
        "4.0"
    ),
    createData(
        "Track One Title",
        "album one",
        "13-02-2022",
        "4.0"
    ),
    createData(
        "Track One Title",
        "album two",
        "13-02-2022",
        "4.0"
    ),
    createData(
        "Track One Title",
        "album two",
        "13-02-2022",
        "4.0"
    ),
    createData(
        "Track One Title",
        "album two",
        "13-02-2022",
        "4.0"
    )
];