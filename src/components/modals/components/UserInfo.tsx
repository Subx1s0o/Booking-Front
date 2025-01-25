export function UserInfo({
    label,
    value,
}: {
    label: string;
    value: string | number | null 
}) {
    return (
        <li className="text-base">
            <span className="font-semibold">{label}: </span>
            {value || '--'}
        </li>
    );
}
