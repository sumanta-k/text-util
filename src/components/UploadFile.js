export default function uploadFile() {
    return (
        <div className="container rounded-top">
            <form
                action="/uploadFile"
                className="my-3 border border-dark"
                style={{ padding: "6px" }}
            >
                <input type="file" id="myFile" name="userFile" />
                <input type="submit" />
            </form>
        </div>
    );
}
