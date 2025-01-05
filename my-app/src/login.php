namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class HomeController extends Controller
{
public function addToSqlFile(Request $request)
{
$data = $request->only(['firstName', 'lastName', 'email', 'password']);

// Sanitize inputs and generate SQL statement
$sql = sprintf(
"INSERT INTO users (`first_name`, `last_name`, `email`, `password`) VALUES ('%s', '%s', '%s', '%s');\n",
addslashes($data['firstName']),
addslashes($data['lastName']),
addslashes($data['email']),
bcrypt($data['password']) // Encrypt the password
);

// Append SQL to the file
$filePath = storage_path('app/LOGINS.sql');
File::append($filePath, $sql);

return response()->json(['message' => 'SQL statement added to the file successfully.']);
}
}