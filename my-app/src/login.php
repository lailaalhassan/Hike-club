use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\YourController;

// Define the route
Route::post('/add-to-sql-file', [YourController::class, 'addToSqlFile']);

// Controller
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class YourController extends Controller
{
    public function addToSqlFile(Request $request)
    {
        // Example data to be added
        $tableName = 'users';
        $data = [
            'email' => 'johndoe@example.com',
            'password' => bcrypt('password'), // Use bcrypt for encryption
            'first_name' => 'John',          // Use consistent keys
            'last_name' => 'Doe',
        ];

        // Generate an SQL insert statement
        $sql = "INSERT INTO `$tableName` (`email`, `password`, `first_name`, `last_name`) VALUES ('{$data['email']}', '{$data['password']}', '{$data['first_name']}', '{$data['last_name']}');\n";

        // Path to the SQL file
        $filePath = storage_path('app/LOGINS.sql'); // Use Laravel's storage_path helper

        // Append the SQL statement to the file
        File::append($filePath, $sql);

        return response()->json(['message' => 'SQL statement added to the file.']);
    }
}
