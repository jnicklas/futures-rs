(function() {var implementors = {};
implementors["futures"] = [];implementors["futures_io"] = ["impl&lt;R&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.BufReader.html' title='futures_io::BufReader'>BufReader</a>&lt;R&gt; <span class='where'>where R: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl&lt;A&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.BufWriter.html' title='futures_io::BufWriter'>BufWriter</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl&lt;A,&nbsp;B&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.Chain.html' title='futures_io::Chain'>Chain</a>&lt;A,&nbsp;B&gt; <span class='where'>where A: <a class='trait' href='futures_io/trait.ReadTask.html' title='futures_io::ReadTask'>ReadTask</a>, B: <a class='trait' href='futures_io/trait.ReadTask.html' title='futures_io::ReadTask'>ReadTask</a></span>","impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.Empty.html' title='futures_io::Empty'>Empty</a>","impl&lt;S&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.ReadyTracker.html' title='futures_io::ReadyTracker'>ReadyTracker</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.Repeat.html' title='futures_io::Repeat'>Repeat</a>","impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.Sink.html' title='futures_io::Sink'>Sink</a>","impl&lt;A&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.Take.html' title='futures_io::Take'>Take</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>","impl&lt;T&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.TaskIo.html' title='futures_io::TaskIo'>TaskIo</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl&lt;T&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.TaskIoRead.html' title='futures_io::TaskIoRead'>TaskIoRead</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl&lt;T&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_io/struct.TaskIoWrite.html' title='futures_io::TaskIoWrite'>TaskIoWrite</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>",];implementors["futures_mio"] = ["impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_mio/struct.ReadinessStream.html' title='futures_mio::ReadinessStream'>ReadinessStream</a>","impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_mio/struct.TcpListener.html' title='futures_mio::TcpListener'>TcpListener</a>","impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_mio/struct.TcpStream.html' title='futures_mio::TcpStream'>TcpStream</a>","impl <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_mio/struct.UdpSocket.html' title='futures_mio::UdpSocket'>UdpSocket</a>",];implementors["futures_tls"] = ["impl&lt;S&gt; <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='futures_tls/struct.TlsStream.html' title='futures_tls::TlsStream'>TlsStream</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
