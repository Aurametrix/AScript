/**
 * Get Google Analytics UID
 * @return int
 */
public function getGAUID() {
    $uid = 0;
    if ($_COOKIE['__utma'])
        list($hash_domain, $uid, $first_visit, $prew_visit, $time_start, $num_visits) = sscanf($_COOKIE['__utma'], '%d.%d.%d.%d.%d.%d');
    elseif ($_COOKIE['_ga'])
        list($c_format, $c_domain, $uid, $first_visit) = sscanf($_COOKIE['_ga'], 'GA%d.%d.%d.%d');

    return $uid;
}



First party cookie
_ga=1.2.286403989.1366364567;

1st field - versioning number - usually, 1

2nd field - 


rd Field

This is a random generated user ID. Used to identify different users.

4th Field

It's a timestamp of the first time the cookie was set for that user.



How to get the current epoch time in ...

PHP	time() more ...

Python	import time; time.time()

Ruby	Time.now (or Time.new). To display the epoch: Time.now.to_i

Perl	time more ...

Java	long epoch = System.currentTimeMillis()/1000;

C#	var epoch = (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalSeconds;

Objective-C	[[NSDate date] timeIntervalSince1970]; (returns double) or NSString *currentTimestamp = [NSString stringWithFormat:@"%f", [[NSDate date] timeIntervalSince1970]];

C++11	double now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();

VBScript/ASP	DateDiff("s", "01/01/1970 00:00:00", Now())

AutoIT	_DateDiff('s', "1970/01/01 00:00:00", _NowCalc())

Delphi	Epoch := DateTimetoUnix(Now); Tested in Delphi 2010.

R	as.numeric(Sys.time())

Erlang/OTP	erlang:system_time(seconds). (version 18+), older versions: calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600.

MySQL	SELECT unix_timestamp(now()) more ...

PostgreSQL	SELECT extract(epoch FROM now());

SQLite	SELECT strftime('%s', 'now');

Oracle PL/SQL	SELECT (SYSDATE - TO_DATE('01/01/1970 00:00:00', 'MM-DD-YYYY HH24:MI:SS')) * 24 * 60 * 60 FROM DUAL

SQL Server	SELECT DATEDIFF(s, '1970-01-01 00:00:00', GETUTCDATE())

IBM Informix	SELECT dbinfo('utc_current') FROM sysmaster:sysdual;

JavaScript	Math.round(new Date().getTime()/1000.0) getTime() returns time in milliseconds.

Visual FoxPro	DATETIME() - {^1970/01/01 00:00:00} Warning: time zones not handled correctly

Adobe ColdFusion	<cfset epochTime = left(getTickcount(), 10)>

Go	time.Now().Unix() more ...

Tcl/Tk	clock seconds

Unix/Linux Shell	date +%s

PowerShell	[int][double]::Parse((Get-Date (get-date).touniversaltime() -UFormat %s))

Other OS's	Command line: perl -e "print time" (If Perl is installed on your system)
