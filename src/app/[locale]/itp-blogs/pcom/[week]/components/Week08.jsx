import VideoFigure from '@/components/VideoFigure';

const Week08 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      {' '}
      <h3 className="text-2xl font-bold"> Week 08: The Mystery of Communication </h3>{' '}
      <VideoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_08/drag_p5_led.MOV"
        alt="Drag p5 to control LED"
        caption="Drag p5 to control LED"
      />{' '}
      <h3 className="text-xl font-bold mt-12 mb-4"> Arduino and p5.js Communication </h3>{' '}
      <p>
        {' '}
        This week, I learned how to establish communication between Arduino and p5.js. One simple example was using a
        slider in p5.js to control the brightness of an LED connected to Arduino. This allowed me to understand how data
        can be sent from a computer to a microcontroller and used to control physical components.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        I see this as an application of some networking concepts I learned previously, particularly the OSI seven-layer
        model. Although Serial Communication is not exactly the same as traditional network communication, some of its
        concepts can be understood through this model.{' '}
      </p>{' '}
      <h3 className="text-xl font-bold mt-12 mb-4"> Serial Communication </h3>{' '}
      <VideoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_08/hello.MOV" alt="Hello" caption="Hello" />{' '}
      <p>
        {' '}
        Serial Communication is a method of transmitting data one bit at a time. In our experiments, Arduino and p5.js
        communicate through a serial connection, using a shared baud rate to determine the transmission speed. For
        example, <code>Serial.begin(9600)</code> configures the communication speed to 9600 baud.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        We also explored the difference between ASCII and binary transmission. ASCII sends data as readable characters,
        while binary sends raw bytes. For example, <code>Serial.print(65)</code> sends the characters &quot;65&quot;, which
        requires two bytes, whereas <code>Serial.write(65)</code> sends the numerical value 65 as a single byte.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        ASCII is easier to read and debug, making it useful when transmitting sensor values or testing communication.
        Binary is generally more space-efficient and is useful when transmitting larger amounts of data or when
        communication efficiency is important.{' '}
      </p>{' '}
      <h3 className="text-xl font-bold mt-12 mb-4"> Data Size and ADC Resolution </h3>{' '}
      <VideoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_08/data_visualized.MOV"
        alt="Data visualization"
        caption="Data visualized"
      />{' '}
      <p>
        {' '}
        One interesting detail I learned was why an analog input value cannot always fit into a single byte. Arduino Uno
        uses a 10-bit Analog-to-Digital Converter (ADC), which produces values ranging from 0 to 1023. However, one byte
        contains only 8 bits and can represent values from 0 to 255.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        To transmit the reading as a single byte, we can use <code>map()</code> to scale the original range from 0~1023
        down to 0~255. However, this reduces the resolution of the data. Another approach is to split the original value
        into two bytes, allowing us to preserve the full reading.{' '}
      </p>{' '}
      <VideoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_08/ball_moving.MOV" alt="Ball Moving" caption="Ball Moving" />{' '}
      
      <h3 className="text-xl font-bold mt-12 mb-4"> Data Formatting and Parsing </h3>{' '}
      <p>
        {' '}
        When transmitting multiple sensor readings, we need a consistent data format so that the receiving device knows
        how to interpret them. For example, we can send three analog readings as an ASCII string separated by
        commas:{' '}
      </p>{' '}
      <pre className="mt-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto">
        {' '}
        <code>{`512,256,789\\r\\n`}</code>{' '}
      </pre>{' '}
      <p className="mt-4">
        {' '}
        The commas act as delimiters to separate individual values, while <code> \\r\\n</code> represents a carriage
        return followed by a line feed, marking the end of a message. This makes it easier for the receiving side to
        identify where one message ends and the next begins.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        On the p5.js side, we can use methods such as <code>split(&quot;,&quot;)</code> to separate the incoming string into
        individual values, then convert them into numbers for further processing. This process is called parsing.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        I also learned about buffers, which temporarily store incoming data until it is read by the program. Since
        serial communication is a continuous stream of data, the receiving side cannot always assume that a complete
        message will arrive at once. Delimiters and message framing help us organize and interpret the incoming data
        correctly.{' '}
      </p>{' '}
      <h3 className="text-xl font-bold mt-12 mb-4"> The OSI Seven-Layer Model </h3>{' '}
      <p>
        {' '}
        The OSI (Open Systems Interconnection) model is a conceptual framework that describes how devices communicate
        over a network. It divides the communication process into seven layers, each responsible for a different part of
        data transmission.{' '}
      </p>{' '}
      <ol className="mt-4 list-decimal pl-6 space-y-3">
        {' '}
        <li>
          {' '}
          <strong>Physical Layer:</strong> Handles the physical transmission of bits through electrical signals, cables,
          or wireless signals.{' '}
        </li>{' '}
        <li>
          {' '}
          <strong>Data Link Layer:</strong> Organizes bits into frames and handles communication between devices on the
          same link, including error detection.{' '}
        </li>{' '}
        <li>
          {' '}
          <strong>Network Layer:</strong> Handles logical addressing and routing, such as IP addresses, to move data
          between networks.{' '}
        </li>{' '}
        <li>
          {' '}
          <strong>Transport Layer:</strong> Provides end-to-end data transmission through protocols such as TCP and
          UDP.{' '}
        </li>{' '}
        <li>
          {' '}
          <strong>Session Layer:</strong> Establishes, manages, and terminates communication sessions.{' '}
        </li>{' '}
        <li>
          {' '}
          <strong>Presentation Layer:</strong> Handles data representation, encoding, encryption, and compression.{' '}
        </li>{' '}
        <li>
          {' '}
          <strong>Application Layer:</strong> Provides network services directly to applications, such as HTTP, FTP, and
          DNS.{' '}
        </li>{' '}
      </ol>{' '}
      <p className="mt-4">
        {' '}
        In our Arduino and p5.js experiments, the Physical and Data Link Layers are particularly relevant to the
        underlying serial transmission. However, data encoding, parsing, and application logic also involve concepts
        that can be related to the upper layers of the OSI model. This is a conceptual comparison rather than a strict
        one-to-one mapping, since Serial and USB have their own communication protocols.{' '}
      </p>{' '}
      <h3 className="text-xl font-bold mt-12 mb-4"> Reflection </h3>{' '}
      <p>
        {' '}
        What I found most interesting this week was realizing that communication is not simply about sending data from
        one device to another. Both sides need to agree on how the data is encoded, transmitted, structured, and
        interpreted. Even a simple interaction like dragging a slider to control an LED involves several layers of
        communication and data processing.{' '}
      </p>{' '}
      <p className="mt-4">
        {' '}
        This gave me a better understanding of how physical devices and software can work together. It also made me more
        aware of the importance of designing a clear communication format when building interactive systems.{' '}
      </p>{' '}
    </main>
  );
};
export default Week08;
