import Table from './Table.js';
import useCheckTicker from './useCheckTicker.js';

export default
function LiveTable(props) {

    const {check, ms} = props;

    const tables = useCheckTicker(check, ms);

    return (
        <>{tables?.map(table => <Table key={table.key} title={table.title} rows={table.rows} />)}</>
    );
}