export default function MenuComponent({ additionalInformation }) {
  return (
    <div>
      <ul class="flex">
        <li class="ml-2 p-2">Home</li>
        <li class="ml-2 p-2">Profile</li>
        <li class="ml-2 p-2">About</li>
        <li class="ml-2 p-2">Contact Us</li>
      </ul>

      <span>{additionalInformation}</span>
    </div>
  );
}
